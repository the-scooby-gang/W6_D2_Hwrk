const assert = require('assert')
const Paint = require('../paint.js')
const Room = require('../room.js')
// const Decorator = require('../decorator.js')

describe('Room', function(){
    let room;

    beforeEach(function(){
        room = new Room(5);
    })


    it('should have an area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 5)

    })
    describe('colours', function(){
        it('should start not painted',function(){
            const actual = room.colours;
            assert.deepStrictEqual(actual, [])
        })
        it('should be be able get the colour of the room', function(){
        const actual = room.getColourOfRoom();
        assert.strictEqual(actual,0)
        })
        it('should be able to be painted', function(){
        room.paintRoom('Pink');
        const actual = room.getColourOfRoom();
        assert.strictEqual(actual, 1)
        })
    })

})

describe ('Paint', function(){
    let paint;
    beforeEach (function(){
        paint = new Paint (5)
    })
    it('should have a can capacity', function(){
        const actual = paint.can_capacity
        assert.strictEqual(actual, 5)
    })
    describe('paint_level', function(){
        it('should be able to check if the paint is empty',function(){
            const actual = paint.paint_level;
            assert.deepStrictEqual(actual, [])
        })
        it('should be able to check the paint level', function(){
            const actual=paint.getPaintLevel();
            assert.strictEqual(actual, 0)
        })
        it('should be able to add paint level', function(){
            paint.increasePaintLevel(1);
            const actual = paint.getPaintLevel();
            assert.strictEqual(actual, 1)
        })
        it('should be able to empty itself of paint',function(){
            paint.increasePaintLevel(1);
            paint.increasePaintLevel(1);
            paint.increasePaintLevel(1);
            paint.emptyPaintLevel([]);
            const actual = paint.getPaintLevel();
            assert.strictEqual(actual, 0)

        })

    })

})

