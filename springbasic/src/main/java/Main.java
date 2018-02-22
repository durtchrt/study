import ab.Magician;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");
        Magician m1 = (Magician) context.getBean("m1");
        Magician m2 = (Magician) context.getBean("m2");
        Magician m3 = (Magician) context.getBean("m3");

        while(true) {
            m1.attack(m2);
            m2.attack(m3);
            m3.attack(m1);
            System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d, magician 3 HP: %d", m1.getHp(), m2.getHp(), m3.getHp()));
            if(m1.isDie() ||  m2.isDie() || m3.isDie()) {
                System.out.println("종료");
                break;
            }
        }

        Magician m11 = (Magician) context.getBean("m1");
        Magician m33 = (Magician) context.getBean("m3");
        System.out.println("m1 == m11 : " + (m1 == m11));
        System.out.println("m3 == m33 : " + (m3 == m33));

        context.close();
//        context.registerShutdownHook();

        Thread.sleep(1000);
        System.out.println("program exit");

    }
}
