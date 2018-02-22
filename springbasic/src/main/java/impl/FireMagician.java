package impl;

import ab.Magician;

public class FireMagician extends Magician {

    @Override
    public void attack(Magician m) {
        System.out.println("파이어볼 발사!!");
        m.decreaseHp(10);
    }
}
