require("mocha");
var assert = require("assert");
const Snippet = require("../ncq/core/snippet");
const Evaluator = require("../ncq/core/evaluator");

/**
 * Test Evaluator class.
 */
describe("Evaluator", function () {
    describe("functions", function () {
        it("should get errors for snippets", function () {
            var snippets = [
                new Snippet("b = 1")
            ]
            var evaluator = new Evaluator();
            var evaluatedSnippets = evaluator.errors(snippets);
            assert.strictEqual(evaluatedSnippets[0].errors.length, 1)
        });
        it("should fix snippets", function () {
            var snippets = [
                new Snippet("var b = 1")
            ]
            var evaluator = new Evaluator();
            var evaluatedSnippets = evaluator.fix(snippets);
            assert.strictEqual(evaluatedSnippets[0].code, "var b = 1;")
        });
    }); 
});