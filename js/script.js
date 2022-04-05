// $ sign same as Document.addEventListener ("DOMContentloaded") 
$(function (){ 
    $("#navbarToggle").blur(function (event){
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }

    });
}
);
// (function (global){
//     var dc = {};
//     var homeHtml = "snippets/home-snippets.html";
//     var allCategoriesUrl ="http://davids-restu=aurant.herokuapp.com/categories.json";
//     var categoriesTitleHtml = "snippets/categories-title-snippet.html";
//     var categoriesHtml = "snippets/categories-snippets.html";
//     var menuItemsUrl = "http://davids-resturant.herkuapp.com/menu_items.json?category=";
//     var menuItemsTitleHtml = "snippets/menu-items-title.html";
//     var menuItemsHtml = "snippets/menu-items.html";
//     // convinience function for inserting innerHtml for select
//     var insertHtml = function(selector, html) {
//         var targetElem = document.querySelector(selector);
//         targetElem.innerHTML = html;
//     };

//     // return substitute of {{prpName}}
//     // with propvalue in given string
//     var insertProperty = function (string, propName, propValue) {
//         var propToReplace = "{{" + propName + "}}";
//         string = string.replace(new RegExp(propToReplace, "g"), propValue);
//         return string;
//     }
// // show loading icon inside element identified by selector
//     var showLoading = function(selector) {
//         var html = "<div class='text-center'>";
//         html += "<img src='images/ajax-loader.gif'></div>";
//         insertHtml(selector, html);
//     };

//     var switchMenuActive = function () {
//         // remove active from home button
//         var classes = document.querySelector("#navHomeButton").className;
//         classes = classes.replace(new RegExp("active", "g"), "");
//         document.querySelector("#navHomeButton").className = classes;

//         // add 'active ' to menu button if not already there
//         classes = document.querySelector("#navHomeButton").className;
//         if(classes.indexOf("active") == -1) {
//             classes += "active";
//             document.querySelector("navHomeButton").className = classes;
//         }
//     };
// // on page load (before  images or css)
//     document.addEventListener("DOMContentLoaded", function(event) {
//         // on first load show home view
//         showLoading("#main-content");
//         $ajaxUtils.sendGetRequest(
//             homeHtml,
//             function(responseText) {
//                 document.querySelector("#main-content")
//                 .innerHTML = responseText;
//             },
//             false);
        
//     });
//     dc.loadMenuCategories = function() {
//         showLoading("#main-content");
//         $ajaxUtils.sendGetRequest(
//             allCategoriesUrl,
//             buildAndShowCategoriesHTML
//         );


//     };
//     dc.loadMenuItems = function(categoryShort) {
//         showLoading("#main-content");
//         $ajaxUtils.sendGetRequest(
//             menuItemsUrl + categoryShort,
//             buildAndShowMenuItemsHTML
//         );

//     };
//     // builds HTML for the categories page based on the data
//     // from the server

//     function buildAndShowCategoriesHTML (categories) {
//         // load title snippets of categories page
//         $ajaxUtils.sendGetRequest(
//             categoriesTitleHtml,
//             function(categoriesTitleHtml) {
//                 // retrieve single categories snippet
//                 $ajaxUtils.sendGetRequest(
//                     categoriesHtml,
//                     function(categoriesHtml) {
//                         var categoriesViewHtml = buildAndShowCategoriesHTML(categories, categoriesTitleHtml, categoriesHtml);
//                         insertHtml("#main-content", categoriesViewHtml);
//                     },
//                     false
//                 );
                
//             },
//             false
//         );
//     }

   

//     function buildAndShowCategoriesHTML(categories, categoriesHtml, categoriesTitleHtml) {
//         var finalHtml = categoriesTitleHtml;
//         finalHtml += "<section='row'>";
//         // loop over categories
//         for(var i = 0; i<categories.length; i++){
//             var html = categoriesHtml;
//             var name = "" + categories[i].name;
//             var short_name = categories[i].short_name;
//             html= insertProperty(html, "name", name);
//             html = insertProperty(html, "short_name",short_name);
//             finalHtml += html;
//         }
//     }
//     finalHtml += "</section";
//     return finalHtml;


// // build Html for the single category page based on the data 
// // from the server
//     function buildAndShowMenuItemsHTML (categoryMenuItems) {
//         // load title snippets of categories page
//         $ajaxUtils.sendGetRequest(
//             menuItemsTitleHtml,
//             function(menuItemsTitleHtml) {
//                 // retrieve single categories snippet
//                 $ajaxUtils.sendGetRequest(
//                     menuItemsHtml,
//                     function(menuItemsHtml) {
//                         var menuItemsViewHtml = buildAndShowMenuItemsHTML(categoriesMenuItems, menuItemsTitleHtml, menuItemsHtml);
//                         insertHtml("#main-content", menuItemsViewHtml);
//                     },
//                     false
//                 );
                
//             },
//             false
//         );
//     }
//     function buildMenuItemsViewHTML(categoryMenuItems, menuItemsTitleHtml, menuItemsHtml) {
//         menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "name", categoryMenuItems.category.name);
//         menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "special_instructions", categoryMenuItems.category.special_instructions);
//         var finalHtml = menuItemsTitleHtml;
//         finalHtml += "<section class='row'>";
//         // loop over categories 
//         var menuItems = categoryMenuItems.menu_items;
//         var catShortName = categoryMenuItems.category.short_name;
//         for (var i = 0; i < menuItems.length; i++){
//             // insert menu item values
//             var html = menuItemsHtml;
//             html = insertProperty(html, "short_name", menuItems[i].short_name);
//             html = insertProperty(html, "catSortName", catShortName);
//             html = insertItemPrice(html, "price_small", menuItems[i].price_small);
//             html = insertItemPortionName(html, "small_portion_name", menuItems[i].small_portion_name );
//             html = insertItemPrice(html, "price_large", menuItems[i].price_large);
//             html = insertItemPortionName(html, "large_portion_name", menuItems[i].large_portion_name);
//             html = insertProperty(html, "name", menuItems[i].description);

//             // add clearfix after every second menu item
//             if(i % 2 != 0){
//                 html =+ "<div class='clearfix visible-lage-block visible-md-block'></div>"
//             }

//                 finalHtml += html;
//         }
//         finalHtml += "</section>";
//         return finalHtml;
//     }

//     // appends price with $ if price exists
//     function insertItemPrice(html, pricePropName, priceValue){
//         // if not specified reply with empty strinng
//         if(!priceValue){
//             return insertProperty(html, pricePropName, "");;

//         }
//     }
//     priceValue = "$" + priceValue.toFixed(2);
//     html = insertProperty(html, pricePropName, priceValue);
//     return html;

// // appending portion price if it exists
//     function insertItemPortionName(html, portionPropName, portionValue){
//         // if not specified reply with empty strinng
//         if(!portionValue){
//             return insertProperty(html, portionPropName, "");;
    
//         };
//     }
//     portionValue = "$" + portionValue.toFixed(2);
//     html = insertProperty(html, portionPropName, portionValue);
//     return html;
//     global.$dc = dc;
  

// }
// )(window);