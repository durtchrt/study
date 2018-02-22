public class Main {
    public static void main(String[] args) {
        int m1Hp = 100;
        int m2Hp = 100;

        m1Hp -= attackByFireball();
        m2Hp -= attackByIceStorm();
        System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d", m1Hp, m2Hp));

        m1Hp -= attackByFireball();
        m2Hp -= attackByIceStorm();
        System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d", m1Hp, m2Hp));

        m1Hp -= attackByFireball();
        m2Hp -= attackByIceStorm();
        System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d", m1Hp, m2Hp));

        m1Hp -= attackByFireball();
        m2Hp -= attackByIceStorm();
        System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d", m1Hp, m2Hp));

        m1Hp -= attackByFireball();
        m2Hp -= attackByIceStorm();
        System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d", m1Hp, m2Hp));

        m1Hp -= attackByFireball();
        m2Hp -= attackByIceStorm();
        System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d", m1Hp, m2Hp));

        m1Hp -= attackByFireball();
        m2Hp -= attackByIceStorm();
        System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d", m1Hp, m2Hp));
    }

    static int attackByFireball() {
        System.out.println("파이어볼 발사!!");
        return 10;
    }


    static int attackByIceStorm() {
        System.out.println("아이스스톰 발사!!");
        return 15;
    }

}
