///<reference path="../../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var ServerError = (function (_super) {
        __extends(ServerError, _super);
        function ServerError() {
            _super.call(this);
        }
        return ServerError;
    })(Error);
    objects.ServerError = ServerError;
})(objects || (objects = {}));

//# sourceMappingURL=servererror.js.map
