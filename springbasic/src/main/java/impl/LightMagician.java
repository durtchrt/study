package impl;

import ab.Magician;

public class LightMagician extends Magician {

    protected LightMagician(int hp, String name) {
        super(hp, name);
    }

    @Override
    public void attack(Magician m) {
        System.out.println("라이트닝 발사!!");
        m.decreaseHp(20);
    }
}
