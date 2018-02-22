public class Main {
    public static void main(String[] args) {
        Magician m1 = new Magician();
        Magician m2 = new Magician();
        Magician m3 = new Magician();


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
    }

//    static int attackByLightningbolt() {
//        System.out.println("라이트닝볼트 발사!!");
//        return 20;
//    }
//
//    static int attackByFireball() {
//        System.out.println("파이어볼 발사!!");
//        return 10;
//    }
//
//
//    static int attackByIceStorm() {
//        System.out.println("아이스스톰 발사!!");
//        return 15;
//    }

}
