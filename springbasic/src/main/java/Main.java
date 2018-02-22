import ab.Magician;
import factory.MagicianFactory;
import impl.IceMagician;
import impl.LightMagician;

import static factory.MagicianType.Fire;
import static factory.MagicianType.Ice;
import static factory.MagicianType.Light;

public class Main {
    public static void main(String[] args) {
        Magician m1 = MagicianFactory.createMagician(Fire);
        Magician m2 = MagicianFactory.createMagician(Ice);
        Magician m3 = MagicianFactory.createMagician(Light);

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
