$(function () {

    Draggable.create(".drag", {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        //zIndexBoost: false,
        throwProps: true
    });

    Draggable.create(".spin", {
        type: "rotation",
        ease: Strong.easeOut,
        throwProps: true
    });
    
    Draggable.create(".scrollvert", {
        type: "scrollTop",
        edgeResistance: 0.5,
        throwProps: true
    });

    Draggable.create(".scrollhor", {
        type: "scrollLeft",
        edgeResistance: 0.5,
        throwProps: true,
        lockAxis: true
    });

    Draggable.create(".scroll", {
        type: "scroll",
        edgeResistance: 0.5,
        throwProps: true
    });

});