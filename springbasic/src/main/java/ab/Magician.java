package ab;

abstract public class Magician {
    //hp는 상태값이 바뀌어야함.
    private int hp;
    private final String name;

    protected Magician(int hp, String name) {
        this.hp = hp;
        this.name = name;
    }

    public void init() {
        System.out.println(String.format("system info: %s가 생성되었습니다.", this.name));
    }

    public void destroy() {
        System.out.println(String.format("system info: %s가 제거되었습니다.", this.name));
    }

    public void decreaseHp(int hp) {
        this.hp -= hp;
    }

    public boolean isDie() {
        return this.hp <= 0;
    }

    public int getHp() {
        return this.hp;
    }


    public abstract void attack(Magician m);
}
