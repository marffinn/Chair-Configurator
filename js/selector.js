var getInfoHeight = function () {
    $('.s-btn-container').css({
        'bottom': -($('.s-btn-container').outerHeight())
    });
}

getInfoHeight();

$('.menuClickZone').on('click', function (event) {
    event.preventDefault();
    if( $('.menuswitch').hasClass('plus') ){
        
        TweenMax.staggerFrom('.s-btn',.05, {y:10}, 0.05);
        
        $('.s-btn-container').removeClass('menuVis');
        $('.menuswitch').toggleClass('plus');
    }
    else {
        $('.s-btn-container').addClass('menuVis');
        $('.menuswitch').toggleClass('plus');
    }
    
});


var sFrameWidth = -($('.s-frame').width()) / 2;
$('.s-frame').css({
    'margin-left': sFrameWidth
});

$('.s-fabric img, .s-frame img, .s-fcolor img').mouseover(function () {
    $('.overInfo').text($(this).attr('alt'));

    var off = $(this).offset();
    var bot = $(this).outerHeight();
    $('.overInfo').css({
        'left': off.left,
        'bottom': bot,
        'width': $(this).outerWidth()
    });
    $('.overInfo').addClass('oi-over');
}).mouseout(function () {
    $('.overInfo').removeClass('oi-over');
});

var splitter = function () {
    if (window.innerWidth >= 1200) {
        return window.innerWidth / 18;
    } else if (window.innerWidth >= 800) {
        return window.innerWidth / 14;
    } else if (window.innerWidth <= 800) {
        return window.innerWidth / 6;
    }
}
var resizeHandler = function () {

    var pew = 0;
    var num = 0;
    var numf = 0;

    $('.s-fcolor img, .s-fabric img, s-frame img').each(function () {
        pew = splitter();
        $(this).css({
            'width': pew,
            'height': pew
        });
    });
    $('.s-fcolor, .s-fabric').css({
        'height': pew,
        'bottom': -pew
    });
    $('.s-slide img').each(function () {
        num += pew;
    });
    $('.s-slide').css({
        'width': num,
        'height': pew
    });
    $('.s-slidef img').each(function () {
        numf += pew;
    });
    $('.s-slidef').css({
        'width': numf,
        'height': pew
    });
    $('.selector').css({
        'height': pew
    });

    var availWidth = $('.s-slide').outerWidth() - $('.s-fabric').outerWidth();
    var availWidthf = $('.s-slidef').outerWidth() - $('.s-fcolor').outerWidth();

    new Dragdealer('fabric', {
        horizontal: true,
        vertical: false,
        loose:true,
        css3:true,
        xPrecision: availWidth,
        animationCallback: function (x, y) {
            $('.s-slide').css('margin-left', -x * availWidth);
        }
    });
    new Dragdealer('fabrics', {
        horizontal: true,
        vertical: false,
        loose:true,
        css3:true,
        xPrecision: availWidthf,
        animationCallback: function (x, y) {
            $('.s-slidef').css('margin-left', -x * availWidth);
        }
    });

}
resizeHandler();

window.onresize = function (event) {
    resizeHandler()
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.s-frame img').on('click', function () {

    $('.s-frame img').addClass("disabledbutton");

    group.remove(rama_model);
    group.remove(oparcie);
    group.remove(siedzenie);


    var model = $(this).attr('model');
    var oparc = $(this).attr('rel');
    curOparcie = oparc;
    curModel = model;

    $('.i-frame b').text($(this).attr('alt'));

    protoSiedzenie = new THREE.TextureLoader().load(fabricMaterials[currentFabric], function () {
        mat = new THREE.MeshPhongMaterial({
            map: protoSiedzenie,
            shininess: 0,
            reflectivity: 0,
            bumpMap: normalmap,
            bumpScale: .0001,
            combine: THREE.MultiplyOperation
        });
        loader.load('json/siedzenie_uniwersal.json', function (geo) {

            siedzenie = new THREE.Mesh(geo, mat);
            siedzenie.material.needsUpdate = true;
            siedzenie.position.set(0, 0, 0);
            siedzenie.scale.set(mscale, mscale, mscale);
            group.add(siedzenie);

        });
    });
    loader.load('json/' + model + '.json', function (geometry, material) {
        rama_model = new THREE.Mesh(geometry, frameMaterials[currentFrameMaterial]);
        rama_model.material.needsUpdate = true;
        rama_model.scale.set(mscale, mscale, mscale);
        rama_model.position.set(0, 0, 0);
        group.add(rama_model);
    });
    protoOparcie = new THREE.TextureLoader().load(fabricMaterials[currentFabric], function () {
        mat = new THREE.MeshPhongMaterial({
            map: protoOparcie,
            shininess: 0,
            reflectivity: 0,
            bumpMap: normalmap,
            bumpScale: .0001
        });
        loader.load('json/' + oparc + '.json', function (geo) {

            oparcie = new THREE.Mesh(geo, mat);
            oparcie.material.needsUpdate = true;
            oparcie.position.set(0, 0, 0);
            oparcie.scale.set(mscale, mscale, mscale);
            group.add(oparcie);

        }, function () {
            $(".s-frame img").removeClass("disabledbutton");
        });
    });

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.s-fabric img').on('click', function () {

    $('.s-fabric img').addClass("disabledbutton");

    oparcie_wybx = $(this).attr("alt");
    group.remove(oparcie);
    group.remove(siedzenie);

    $('.i-fabric b').text($(this).attr('alt'));

    protoSiedzenie = new THREE.TextureLoader().load(fabricMaterials[oparcie_wybx], function () {
        mat = new THREE.MeshPhongMaterial({
            map: protoOparcie,
            shininess: 0,
            specular: new THREE.Color(0xff0000),
            reflectivity: 0,
            bumpMap: normalmap,
            bumpScale: .0001,
            combine: THREE.MultiplyOperation
        });
        loader.load('json/siedzenie_uniwersal.json', function (geo) {

            siedzenie = new THREE.Mesh(geo, mat);
            siedzenie.material.needsUpdate = true;
            siedzenie.position.set(0, 0, 0);
            siedzenie.scale.set(mscale, mscale, mscale);
            group.add(siedzenie);

        });
    });

    protoOparcie = new THREE.TextureLoader().load(fabricMaterials[oparcie_wybx], function () {
        mat = new THREE.MeshPhongMaterial({
            map: protoOparcie,
            shininess: 0,
            reflectivity: 0,
            bumpMap: normalmap,
            bumpScale: .0001,
            combine: THREE.MultiplyOperation
        });
        loader.load('json/' + curOparcie + '.json', function (geo) {

            oparcie = new THREE.Mesh(geo, mat);
            oparcie.material.needsUpdate = true;
            oparcie.position.set(0, 0, 0);
            oparcie.scale.set(mscale, mscale, mscale);
            group.add(oparcie);

        }, function () {
            $(".s-fabric img").removeClass("disabledbutton");
        });
    });
    currentFabric = oparcie_wybx;

});

$('.s-fcolor img').on('click', function () {
    $('.s-fcolor img').addClass("disabledbutton");

    var framePaint = $(this).attr('rel');
    $('.i-fcolor b').text($(this).attr('rel'));

    currentFrameMaterial = framePaint;

    rama_model.material = frameMaterials[framePaint];
    rama_nogi.material = frameMaterials[framePaint];
    rama_siedzenie.material = frameMaterials[framePaint];
    rama_wyg_wzmocnienie.material = frameMaterials[framePaint];
    rama_nogi_wzmocnienie.material = frameMaterials[framePaint];
    rama_wzmocnienie.material = frameMaterials[framePaint];

    $('.s-fcolor img').removeClass("disabledbutton");

});

$('.s-frameBtn').on('click', function () {
    $('#fabric, #fabrics').removeClass('ftog');
    $('.s-btn').removeClass('s-btnActive');
    $(this).addClass('s-btnActive');

    $('.selectees').children().removeClass('s-toggle');
    $('.s-frame').addClass('s-toggle');
});
$('.s-fcolorBtn').on('click', function () {
    $('#fabric').removeClass('ftog');
    $('.s-btn').removeClass('s-btnActive');
    $(this).addClass('s-btnActive');
    $('.selectees').children().removeClass('s-toggle');

    $('.s-fcolor').addClass('s-toggle');
    $('#fabrics').addClass('ftog');
});
$('.s-fabricBtn').on('click', function () {
    $('#fabrics').removeClass('ftog');
    $('.s-btn').removeClass('s-btnActive');
    $(this).addClass('s-btnActive');
    $('.selectees').children().removeClass('s-toggle');

    $('.s-fabric').addClass('s-toggle');
    $('#fabric').addClass('ftog');
});
