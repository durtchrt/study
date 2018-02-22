public class Magician {
    private int hp = 100;

    public void decreaseHp(int hp) {
        this.hp -= hp;
    }

    public boolean isDie() {
        return this.hp <= 0;
    }

    public int getHp() {
        return this.hp;
    }

    public void attack(Magician m) {
        m.decreaseHp(10);
    }
}
