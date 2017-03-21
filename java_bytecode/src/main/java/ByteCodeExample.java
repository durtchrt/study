import java.util.function.Predicate;

class ByteCodeExample {
  public static void main(String[] args) {
    int local11 = 0;
    int local = 0;
    // int local = 100;
    local++;
    local--;
    local++;
    Predicate p= (o)-> true;
    System.out.println("local: " + local);

    Hello o = new Hello();
    o.h();


  }
}

class Hello {
  public void h() {
    Integer i =0;
  }
}
