class Calculator {
    panel = $(".panel");
    history = $(".history");
    output = $(".output");
    

    data = "0";
    prev_data = "";
    operator = "";

    constructor() {
        this.update()
    }
    numberClick(number) {
        if (this.data === "" && number === "." ) { return }
        if (this.data.includes(".") && number === ".") { return }
        if (this.data[0] === "0") {
            this.data = number;
            this.update();
            return 
        }
        this.data += number;
        this.update();
    }

    setOperator(operator) {
        if (this.prev_data.length === 0) {
            this.prev_data = this.data;
            this.data = "0";
        }
        this.operator = operator;
        this.update();
    }

    add() {
        this.setOperator("+");
    }
    minus() {
        this.setOperator("-");
    }
    times() {
        this.setOperator("*");
    }
    division() {
        this.setOperator("/");
    }
    equal() {
        switch (this.operator) {
            case "+":
                console.log("+");
                this.data = parseFloat(this.prev_data) + parseFloat(this.data);
                break;
            case "-":
                console.log("-");
                this.data = parseFloat(this.prev_data) - parseFloat(this.data);
                break;
            case "*":
                console.log("*");
                this.data = parseFloat(this.prev_data) * parseFloat(this.data);
                break;
            case "/":
                console.log("/");
                this.data = parseFloat(this.prev_data) / parseFloat(this.data);
                break;
        }
        this.data = this.data.toString();
        this.prev_data = "";
        this.operator = "";
        this.update();
    }
    delete() {
        if (this.data.length > 1) {
            this.data = this.data.slice(0, -1);
        } else {
            this.data = "0";
        }
        this.update();
    }
    clear() {
        this.data = "0";
        this.operator = "";
        this.prev_data = "";
        this.update();
    }

    update() {
        this.output.html(this.data);
        this.history.html(this.prev_data + " " + this.operator);
    }
}

calculator = new Calculator()