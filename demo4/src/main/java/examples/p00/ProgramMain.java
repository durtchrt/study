package examples.p00;

public class ProgramMain {
    public static int LIMIT = 100;

    public static void main(String[] args) {
        ProgramMain m = new ProgramMain();
        m.depthOne(LIMIT);
    }

    public void depthOne(int limit) {
        ProgramMain.LIMIT = 9999;
        depthTwo(limit);
    }

    private void depthTwo(int limit) {
        System.out.println("limit is " + limit);
        throw new RuntimeException("error!");
    }
}


