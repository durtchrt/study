package impl;

import ab.Magician;

public class IceMagician extends Magician {

    protected IceMagician(int hp, String name) {
        super(hp, name);
    }

    @Override
    public void attack(Magician m) {
        System.out.println("아이스스톰 발사!!");
        m.decreaseHp(15);
    }
}
