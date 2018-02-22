import ab.Magician;
import impl.FireMagician;
import impl.IceMagician;
import impl.LightMagician;

public class Main {
    public static void main(String[] args) {
        Magician m1 = new FireMagician();
        Magician m2 = new IceMagician();
        Magician m3 = new LightMagician();

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
}
