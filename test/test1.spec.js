describe('my first jasmine test',function () {
    it('add 3, 2 ===5',function () {
        var res = add(3,2)
        expect(res).toEqual(5)
    })
})
