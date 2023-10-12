// Assuming parse5 is already loaded in the browser
var DocumentTree = (function () {
    function getChildNodes(childNodes) {
        return (childNodes || [])
            .filter(function (childNode) { return childNode.nodeName !== '#text'; })
            .map(function (childNode) { return getNode(childNode); });
    }

    function getNode(elementNode) {
        var attributes = {};
        (elementNode.attrs || []).forEach(function (_a) {
            var name = _a.name, value = _a.value;
            attributes[name] = value;
        });
        var children = getChildNodes(elementNode.childNodes);
        return {
            attributes: attributes,
            children: children,
            tagName: elementNode.tagName
        };
    }

    function generate(htmlString) {
        var document = parse5.parseFragment(htmlString.trim());
        var tree = getChildNodes(document.childNodes);
        return tree;
    }

    return {
        generate: generate
    };
})();
