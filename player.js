class character(player,enemy){
    this.type = [earth,air,fire,water];
    this.health = 100;
    this.firstAttack=[]
    this.secondAttack=[]
    this.thirdAttack=[]
}

class enemy extends earth{
    constructor(type){
        super(type);
        this.firstAttack= "Rock Throw";
        this.secondAttack="Earthquake";
        this.thirdAttack=" Mudsling";
    }
}

class enemy extends air{
    constructor(type){
        super(type);
        this.firstAttack= "Windblade";
        this.secondAttack="Tornado";
        this.thirdAttack=" Super Gust";
    }
}

class enemy extends fire{
    constructor(type){
        super(type);
        this.firstAttack="Fire Ball";
        this.secondAttack= "Firestorm";
        this.thirdAttack="Heat Wave";
    }
}

class enemy extends water{
    constructor(type){
        super(type);
        this.firstAttack="Water Jet";
        this.secondAttack="Splash";
        this.thirdAttack="Geyser";
    }
}

class enemy extends water{
    constructor(type){
        super(type);
        this.firstAttack="Water Jet";
        this.secondAttack="Splash";
        this.thirdAttack="Geyser";
    }
}

class player extends earth{
    constructor(type){
        super(type);
        this.firstAttack= "Rock Throw";
        this.secondAttack="Earthquake";
        this.thirdAttack=" Mudsling";
    }
}

class player extends fire{
    constructor(type){
        super(type);
        this.firstAttack="Fire Ball";
        this.secondAttack= "Firestorm";
        this.thirdAttack="Heat Wave";
    }
}

class player extends air{
    constructor(type){
        super(type);
        this.firstAttack= "Windblade";
        this.secondAttack="Tornado";
        this.thirdAttack=" Super Gust";
    }
}

