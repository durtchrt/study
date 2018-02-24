package config;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.jdbc.datasource.ConnectionHolder;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Component;
import org.springframework.transaction.support.TransactionSynchronizationManager;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@Aspect
@Component
public class Aop {
    private final DataSource dataSource;

    public Aop(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Around("execution(* *.insert(..))")
//    @Around("@target(config.Dao)")
//    @Around("@annotation(LogExecutionTime)")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();

        Object proceed = joinPoint.proceed();

        long executionTime = System.currentTimeMillis() - start;

        System.out.println(joinPoint.getSignature() + " executed in " + executionTime + "ms");
        return proceed;
    }

    @Around("@annotation(Transaction)")
    public Object doTransaction(ProceedingJoinPoint joinPoint) throws Throwable {
        Connection con = DataSourceUtils.getConnection(this.dataSource);
        TransactionSynchronizationManager.bindResource(this.dataSource, new ConnectionHolder(con));
        con.setAutoCommit(false);
        System.out.println(":::>>" + con);
        System.out.println("autocommit false");
        Object proceed = joinPoint.proceed();
        System.out.println("committed");
        con.commit();

        return proceed;
    }

    @AfterThrowing(value = "@annotation(Transaction)", throwing = "ex")
    public void rollbackTransaction(JoinPoint jp, Throwable ex) {
        Connection con = DataSourceUtils.getConnection(this.dataSource);
        System.out.println(":::>>" + con);
        System.out.println("rollback complete!");

        try {
            con.rollback();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
