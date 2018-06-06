"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var home_view_model_1 = require("./home-view-model");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new home_view_model_1.HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
function arLoaded(args) {
    var ar = args.object;
    // interact with the 'ar' object here if you like
}
exports.arLoaded = arLoaded;
function planeTapped(args) {
    console.log("Plane tapped x: " + args.position.x + " y: " + +args.position.y);
    args.object.addBox({
        position: {
            x: args.position.x,
            y: args.position.y + 1,
            z: args.position.z
        },
        dimensions: 1,
        scale: 0.15,
        materials: ["tnsgranite"],
        mass: 0.0000001,
        onTap: function (node) { return console.log("box tapped: " + node.id); }
    }).then(function (node) { return console.log("box added: " + node.id); });
}
exports.planeTapped = planeTapped;
function sceneTapped(args) {
    console.log("Scene tapped x: " + args.position.x + " y: " + +args.position.y + " z: " + +args.position.z);
    args.object.addBox({
        position: {
            x: 0,
            y: 0.1,
            z: -1
        },
        scale: 1,
        dimensions: {
            x: 0.3,
            y: 0.3,
            z: 0.3
        },
        //materials: ["Assets.scnassets/Materials/tnsgranite/tnsgranite-diffuse.png"], // must be in App_Resources
        //mass: 0.002, // very light - makes it bounce a bit when dropped
        onTap: function (node) { return console.log("box tapped: " + node.id); }
    }).then(function (node) { return console.log("box added: " + node.id); });
}
exports.sceneTapped = sceneTapped;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUlGLHFEQUFrRDtBQUdsRCx3QkFBK0IsSUFBbUI7SUFDOUMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWEsRUFBRSxDQUFDO0FBQzlDLENBQUM7QUFKRCx3Q0FJQztBQUVELGtCQUF5QixJQUF1QjtJQUM1QyxJQUFNLEVBQUUsR0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLGlEQUFpRDtBQUNyRCxDQUFDO0FBSEQsNEJBR0M7QUFFRCxxQkFBNEIsSUFBNEI7SUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2pCLFFBQVEsRUFBRTtZQUNSLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQjtRQUNELFVBQVUsRUFBRSxDQUFDO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDekIsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXJDLENBQXFDO0tBQ3JELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBZEgsa0NBY0c7QUFFSCxxQkFBNEIsSUFBNEI7SUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2pCLFFBQVEsRUFBRTtZQUNSLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ047UUFDRCxLQUFLLEVBQUUsQ0FBQztRQUNSLFVBQVUsRUFBRTtZQUNWLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztTQUNQO1FBQ0QsMEdBQTBHO1FBQzFHLGlFQUFpRTtRQUNqRSxLQUFLLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXJDLENBQXFDO0tBQ3JELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBbEJILGtDQWtCRyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xyXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xyXG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cclxuKi9cclxuXHJcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVZpZXdNb2RlbCB9IGZyb20gXCIuL2hvbWUtdmlldy1tb2RlbFwiO1xyXG5pbXBvcnQgeyBBUiwgQVJMb2FkZWRFdmVudERhdGEsIEFSUGxhbmVUYXBwZWRFdmVudERhdGEsIEFSU2NlbmVUYXBwZWRFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtYXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuXHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhvbWVWaWV3TW9kZWwoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFyTG9hZGVkKGFyZ3M6IEFSTG9hZGVkRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICBjb25zdCBhcjogQVIgPSBhcmdzLm9iamVjdDtcclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlICdhcicgb2JqZWN0IGhlcmUgaWYgeW91IGxpa2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYW5lVGFwcGVkKGFyZ3M6IEFSUGxhbmVUYXBwZWRFdmVudERhdGEpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUGxhbmUgdGFwcGVkIHg6IFwiICsgYXJncy5wb3NpdGlvbi54ICsgXCIgeTogXCIgKyArIGFyZ3MucG9zaXRpb24ueSk7XHJcbiAgICBhcmdzLm9iamVjdC5hZGRCb3goe1xyXG4gICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IGFyZ3MucG9zaXRpb24ueCxcclxuICAgICAgICB5OiBhcmdzLnBvc2l0aW9uLnkgKyAxLCAvLyBkcm9wIHRoZSBib3ggZnJvbSBhIG1ldGVyIGhpZ2hcclxuICAgICAgICB6OiBhcmdzLnBvc2l0aW9uLnpcclxuICAgICAgfSxcclxuICAgICAgZGltZW5zaW9uczogMSxcclxuICAgICAgc2NhbGU6IDAuMTUsXHJcbiAgICAgIG1hdGVyaWFsczogW1widG5zZ3Jhbml0ZVwiXSwgLy8gdGhpcyBuZWVkcyB0byBiZSBwYXJ0IG9mIHlvdXIgYXBwJ3MgYXNzZXRzLCBzZWUgdGhlIGRlbW8gYXBwXHJcbiAgICAgIG1hc3M6IDAuMDAwMDAwMSwgLy8gdmVyeSBsaWdodCAtIG1ha2VzIGl0IGJvdW5jZSBhIGJpdCB3aGVuIGRyb3BwZWRcclxuICAgICAgb25UYXA6IG5vZGUgPT4gY29uc29sZS5sb2coXCJib3ggdGFwcGVkOiBcIiArIG5vZGUuaWQpXHJcbiAgICB9KS50aGVuKG5vZGUgPT4gY29uc29sZS5sb2coXCJib3ggYWRkZWQ6IFwiICsgbm9kZS5pZCkpO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIHNjZW5lVGFwcGVkKGFyZ3M6IEFSU2NlbmVUYXBwZWRFdmVudERhdGEpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2NlbmUgdGFwcGVkIHg6IFwiICsgYXJncy5wb3NpdGlvbi54ICsgXCIgeTogXCIgKyArIGFyZ3MucG9zaXRpb24ueSArIFwiIHo6IFwiICsgKyBhcmdzLnBvc2l0aW9uLnopO1xyXG4gICAgYXJncy5vYmplY3QuYWRkQm94KHtcclxuICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAuMSwgLy8gZHJvcCB0aGUgYm94IGZyb20gYSBtZXRlciBoaWdoXHJcbiAgICAgICAgejogLTFcclxuICAgICAgfSxcclxuICAgICAgc2NhbGU6IDEsXHJcbiAgICAgIGRpbWVuc2lvbnM6IHtcclxuICAgICAgICB4OiAwLjMsXHJcbiAgICAgICAgeTogMC4zLFxyXG4gICAgICAgIHo6IDAuM1xyXG4gICAgICB9LFxyXG4gICAgICAvL21hdGVyaWFsczogW1wiQXNzZXRzLnNjbmFzc2V0cy9NYXRlcmlhbHMvdG5zZ3Jhbml0ZS90bnNncmFuaXRlLWRpZmZ1c2UucG5nXCJdLCAvLyBtdXN0IGJlIGluIEFwcF9SZXNvdXJjZXNcclxuICAgICAgLy9tYXNzOiAwLjAwMiwgLy8gdmVyeSBsaWdodCAtIG1ha2VzIGl0IGJvdW5jZSBhIGJpdCB3aGVuIGRyb3BwZWRcclxuICAgICAgb25UYXA6IG5vZGUgPT4gY29uc29sZS5sb2coXCJib3ggdGFwcGVkOiBcIiArIG5vZGUuaWQpXHJcbiAgICB9KS50aGVuKG5vZGUgPT4gY29uc29sZS5sb2coXCJib3ggYWRkZWQ6IFwiICsgbm9kZS5pZCkpO1xyXG4gIH0iXX0=