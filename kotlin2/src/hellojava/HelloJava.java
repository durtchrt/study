package hellojava;

public class HelloJava {
    public String a = "Hello Java!";
    private String b;

    public String getB() {
        return b;
    }

    public void setB(String b) {
        this.b = b;
    }

    public void hello() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }
        });
    }
}
