package impl;

import ab.Magician;

public class FireMagician extends Magician {

    public FireMagician(int hp, String name) {
        super(hp, name);
    }

    @Override
    public void attack(Magician m) {
        System.out.println("파이어볼 발사!!");
        m.decreaseHp(10);
    }
}
