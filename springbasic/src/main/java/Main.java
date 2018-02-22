public class Main {
    public static void main(String[] args) {
        int m1Hp = 100;
        int m2Hp = 100;
        int m3Hp = 100;

        while(true) {
            m1Hp -= attackByFireball();
            m2Hp -= attackByIceStorm();
            m3Hp -= attackByLightningbolt();
            System.out.println(String.format("magician 1 HP : %d, magician 2 HP: %d, magician 3 HP: %d", m1Hp, m2Hp, m3Hp));
            if(m1Hp <= 0 || m2Hp <= 0 || m3Hp <= 0) {
                System.out.println("종료");
                break;
            }
        }
    }

    static int attackByLightningbolt() {
        System.out.println("라이트닝볼트 발사!!");
        return 20;
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
