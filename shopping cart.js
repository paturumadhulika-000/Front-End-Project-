function cart() {
    let count = 0;

    return {
        add: () => console.log(++count),

        remove: () => console.log(count > 0 ? --count : 0),

        show: () => console.log(count)
    };
}

const c = cart();

c.add();
c.add();
c.show();
c.remove();
c.show();