describe("基础测试用例", function() {
    it("稀释点赞", function() {
        expect(window.debounce(function(){console.log(1)},1000,1000)).toBe(0);
    });
});