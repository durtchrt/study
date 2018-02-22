package impl;

import ab.Magician;

public class LightMagician extends Magician {

    @Override
    public void attack(Magician m) {
        System.out.println("라이트닝 발사!!");
        m.decreaseHp(20);
    }
}
