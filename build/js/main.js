$(document).ready(function(){var s="slick-active",r="aria-hidden";$(".slider-wrapper").on("init",function(){$(".custom-dots--banner li:first-of-type").addClass(s).attr(r,!1)}).on("afterChange",function(e,i,t){var a=$(".custom-dots--banner");$("li",a).removeClass(s).attr(r,!0),a.each(function(){$("li",$(this)).eq(t).addClass(s).attr(r,!1)})}),$(".slider-wrapper").on("init",function(e,i){$(".current-count--banner").append("1")}),$(".slider-wrapper").slick({draggable:!1,dots:!0,arrows:!1,appendDots:$(".custom-dots--banner")}),$(".slider-wrapper").on("afterChange",function(e,i,t,a){$(".current-count--banner").html(t+1)}),$(".slider-nav").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".slider-wrapper",dots:!1,arrows:!1}),jQuery(".slider-nav .slick-left").on("click",function(){jQuery(".slider-nav").slick("slickPrev")}),jQuery(".slider-nav .slick-right").on("click",function(){jQuery(".slider-nav").slick("slickNext")});s="slick-active",r="aria-hidden";$(".achievement-slider").on("init",function(){$(".custom-dots li:first-of-type").addClass(s).attr(r,!1)}).on("afterChange",function(e,i,t){var a=$(".custom-dots");$("li",a).removeClass(s).attr(r,!0),a.each(function(){$("li",$(this)).eq(t).addClass(s).attr(r,!1)})}),$(".achievement-slider").on("init",function(e,i){$(".current-count--ach").append("1")}),$(".achievement-slider").slick({draggable:!1,centerMode:!0,slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,speed:1e3,appendDots:$(".custom-dots")}),$(".achievement-slider").on("afterChange",function(e,i,t,a){$(".current-count--ach").html(t+1)}),jQuery(".achievement-slider .slick-left").on("click",function(){jQuery(".achievement-slider").slick("slickPrev")}),jQuery(".achievement-slider .slick-right").on("click",function(){jQuery(".achievement-slider").slick("slickNext")});var e=jQuery(".achievement-slider .slick-slide:not(.slick-cloned)").length;$(".total_count").append(e),$(".clients-slider").slick({slidesToShow:6,slidesToScroll:1,arrows:!1,infinite:!0,cssEase:"ease",autoplay:!0,autoplaySpeed:4e3,speed:1e3,zIndex:1e3}),$(".practices-nav li:first-of-type a").addClass("active"),$(".practices-wrapper:first-of-type").show(),$(".practices-nav a").on("click",function(e){e.preventDefault(),$(".practices-nav a").removeClass("active"),$(this).addClass("active");var i=$(this).attr("value");$(".practices-wrapper").each(function(){$(this).hide(),$(this).attr("data-filter")==i&&$(this).show()})}),$("#filters a").on("click",function(){$("#filters a").removeClass("active"),$(this).addClass("active");var e=$(this).attr("value");$(".team-item").hide(),$('.team-item[data-filter*="'+e+'"]').show()}).change(),$('#filters a[value="all"]').on("click",function(){$(".team-item").show()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhY3RpdmVDbGFzcyIsImFyaWFBdHRyaWJ1dGUiLCJvbiIsImFkZENsYXNzIiwiYXR0ciIsImV2ZW50Iiwic2xpY2siLCJjdXJyZW50U2xpZGUiLCIkZG90cyIsInJlbW92ZUNsYXNzIiwiZWFjaCIsInRoaXMiLCJlcSIsImFwcGVuZCIsImRyYWdnYWJsZSIsImRvdHMiLCJhcnJvd3MiLCJhcHBlbmREb3RzIiwibmV4dFNsaWRlIiwiaHRtbCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXNOYXZGb3IiLCJqUXVlcnkiLCJjZW50ZXJNb2RlIiwic3BlZWQiLCJhY2hpZXZlbWVudFRvdGFsU2xpZGVzIiwibGVuZ3RoIiwiaW5maW5pdGUiLCJjc3NFYXNlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiekluZGV4Iiwic2hvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiaGlkZSIsIm9wdGlvblNlbGVjdGVkIiwiY2hhbmdlIl0sIm1hcHBpbmdzIjoiQUFHQUEsRUFBR0MsVUFBV0MsTUFBTSxXQUlaLElBQUlDLEVBQWMsZUFDZEMsRUFBZ0IsY0FDcEJKLEVBQUcsbUJBQ0VLLEdBQUksT0FBUSxXQUNUTCxFQUFHLHlDQUEwQ00sU0FBVUgsR0FBY0ksS0FBTUgsR0FBZSxLQUU3RkMsR0FBSSxjQUFlLFNBQVVHLEVBQU9DLEVBQU9DLEdBQ3hDLElBQUlDLEVBQVFYLEVBQUcsd0JBQ2ZBLEVBQUcsS0FBTVcsR0FBUUMsWUFBYVQsR0FBY0ksS0FBTUgsR0FBZSxHQUNqRU8sRUFBTUUsS0FBTSxXQUNSYixFQUFHLEtBQU1BLEVBQUdjLE9BQVNDLEdBQUlMLEdBQWVKLFNBQVVILEdBQWNJLEtBQU1ILEdBQWUsT0FJakdKLEVBQUUsbUJBQW1CSyxHQUFHLE9BQVEsU0FBU0csRUFBT0MsR0FDeENULEVBQUUsMEJBQTBCZ0IsT0FBTyxPQUV2Q2hCLEVBQUUsbUJBQW1CUyxNQUFNLENBQ3ZCUSxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxXQUFZcEIsRUFBRSwwQkFFbEJBLEVBQUUsbUJBQ0dLLEdBQUcsY0FBZSxTQUFTRyxFQUFPQyxFQUFPQyxFQUFjVyxHQUVwRHJCLEVBQUUsMEJBQTBCc0IsS0FBS1osRUFBYSxLQUsxRFYsRUFBRSxlQUFlUyxNQUFNLENBQ25CYyxhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCQyxTQUFVLGtCQUNWUCxNQUFNLEVBQ05DLFFBQVEsSUFLWk8sT0FBTywyQkFBMkJyQixHQUFHLFFBQVMsV0FDMUNxQixPQUFPLGVBQWVqQixNQUFNLGVBRWhDaUIsT0FBTyw0QkFBNEJyQixHQUFHLFFBQVMsV0FDM0NxQixPQUFPLGVBQWVqQixNQUFNLGVBSzVCTixFQUFjLGVBQ2RDLEVBQWdCLGNBQ3BCSixFQUFHLHVCQUNFSyxHQUFJLE9BQVEsV0FDVEwsRUFBRyxpQ0FBa0NNLFNBQVVILEdBQWNJLEtBQU1ILEdBQWUsS0FFckZDLEdBQUksY0FBZSxTQUFVRyxFQUFPQyxFQUFPQyxHQUN4QyxJQUFJQyxFQUFRWCxFQUFHLGdCQUNmQSxFQUFHLEtBQU1XLEdBQVFDLFlBQWFULEdBQWNJLEtBQU1ILEdBQWUsR0FDakVPLEVBQU1FLEtBQU0sV0FDUmIsRUFBRyxLQUFNQSxFQUFHYyxPQUFTQyxHQUFJTCxHQUFlSixTQUFVSCxHQUFjSSxLQUFNSCxHQUFlLE9BSWpHSixFQUFFLHVCQUF1QkssR0FBRyxPQUFRLFNBQVNHLEVBQU9DLEdBQ2hEVCxFQUFFLHVCQUF1QmdCLE9BQU8sT0FFcENoQixFQUFFLHVCQUF1QlMsTUFBTSxDQUMzQlEsV0FBVyxFQUNYVSxZQUFZLEVBQ1pKLGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJOLE1BQU0sRUFDTkMsUUFBUSxFQUNSUyxNQUFPLElBQ1BSLFdBQVlwQixFQUFFLGtCQUVsQkEsRUFBRSx1QkFDR0ssR0FBRyxjQUFlLFNBQVNHLEVBQU9DLEVBQU9DLEVBQWNXLEdBRXBEckIsRUFBRSx1QkFBdUJzQixLQUFLWixFQUFhLEtBS25EZ0IsT0FBTyxtQ0FBbUNyQixHQUFHLFFBQVMsV0FDbERxQixPQUFPLHVCQUF1QmpCLE1BQU0sZUFFeENpQixPQUFPLG9DQUFvQ3JCLEdBQUcsUUFBUyxXQUNuRHFCLE9BQU8sdUJBQXVCakIsTUFBTSxlQUt4QyxJQUFJb0IsRUFBeUJILE9BQU8sdURBQXVESSxPQUUzRjlCLEVBQUUsZ0JBQWdCZ0IsT0FBT2EsR0FNekI3QixFQUFFLG1CQUFtQlMsTUFBTSxDQUN2QmMsYUFBYyxFQUNkQyxlQUFnQixFQUNoQkwsUUFBUSxFQUNSWSxVQUFVLEVBQ1ZDLFFBQVMsT0FDVEMsVUFBVSxFQUNWQyxjQUFlLElBQ2ZOLE1BQU8sSUFDUE8sT0FBUSxNQUtabkMsRUFBRSxxQ0FBcUNNLFNBQVMsVUFDaEROLEVBQUUsb0NBQW9Db0MsT0FFdENwQyxFQUFFLG9CQUFvQkssR0FBSSxRQUFTLFNBQVNnQyxHQUN4Q0EsRUFBRUMsaUJBQ0Z0QyxFQUFFLG9CQUFvQlksWUFBWSxVQUNsQ1osRUFBRWMsTUFBTVIsU0FBUyxVQUNqQixJQUFJaUMsRUFBS3ZDLEVBQUVjLE1BQU1QLEtBQUssU0FDdEJQLEVBQUUsc0JBQXNCYSxLQUFLLFdBQ3pCYixFQUFFYyxNQUFNMEIsT0FDTHhDLEVBQUVjLE1BQU1QLEtBQUssZ0JBQWtCZ0MsR0FDOUJ2QyxFQUFFYyxNQUFNc0IsV0FPcEJwQyxFQUFFLGNBQWNLLEdBQUcsUUFBUyxXQUN4QkwsRUFBRSxjQUFjWSxZQUFZLFVBQzVCWixFQUFFYyxNQUFNUixTQUFTLFVBQ2pCLElBQUltQyxFQUFpQnpDLEVBQUVjLE1BQU1QLEtBQUssU0FDbENQLEVBQUUsY0FBY3dDLE9BQ2hCeEMsRUFBRSw0QkFBOEJ5QyxFQUFpQixNQUFNTCxTQUN4RE0sU0FFSDFDLEVBQUUsMkJBQTJCSyxHQUFHLFFBQVMsV0FDckNMLEVBQUUsY0FBY29DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ3VzdG9tXG4gKi9cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBIb21lIGJhbm5lciBzbGlkZXJcblxuICAgICAgICB2YXIgYWN0aXZlQ2xhc3MgPSAnc2xpY2stYWN0aXZlJyxcbiAgICAgICAgICAgIGFyaWFBdHRyaWJ1dGUgPSAnYXJpYS1oaWRkZW4nO1xuICAgICAgICAkKCAnLnNsaWRlci13cmFwcGVyJyApXG4gICAgICAgICAgICAub24oICdpbml0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCggJy5jdXN0b20tZG90cy0tYmFubmVyIGxpOmZpcnN0LW9mLXR5cGUnICkuYWRkQ2xhc3MoIGFjdGl2ZUNsYXNzICkuYXR0ciggYXJpYUF0dHJpYnV0ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgLm9uKCAnYWZ0ZXJDaGFuZ2UnLCBmdW5jdGlvbiggZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUgKSB7XG4gICAgICAgICAgICAgICAgdmFyICRkb3RzID0gJCggJy5jdXN0b20tZG90cy0tYmFubmVyJyApO1xuICAgICAgICAgICAgICAgICQoICdsaScsICRkb3RzICkucmVtb3ZlQ2xhc3MoIGFjdGl2ZUNsYXNzICkuYXR0ciggYXJpYUF0dHJpYnV0ZSwgdHJ1ZSApO1xuICAgICAgICAgICAgICAgICRkb3RzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCAnbGknLCAkKCB0aGlzICkgKS5lcSggY3VycmVudFNsaWRlICkuYWRkQ2xhc3MoIGFjdGl2ZUNsYXNzICkuYXR0ciggYXJpYUF0dHJpYnV0ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgJCgnLnNsaWRlci13cmFwcGVyJykub24oJ2luaXQnLCBmdW5jdGlvbihldmVudCwgc2xpY2spe1xuICAgICAgICAgICAgICAgICQoJy5jdXJyZW50LWNvdW50LS1iYW5uZXInKS5hcHBlbmQoJzEnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLnNsaWRlci13cmFwcGVyJykuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoJy5jdXN0b20tZG90cy0tYmFubmVyJyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJy5zbGlkZXItd3JhcHBlcicpXG4gICAgICAgICAgICAgICAgLm9uKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5hbGx5IGxldCdzIGRvIHRoaXMgYWZ0ZXIgY2hhbmdpbmcgc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICQoJy5jdXJyZW50LWNvdW50LS1iYW5uZXInKS5odG1sKGN1cnJlbnRTbGlkZSsxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5hdmlnYXRpb25cblxuICAgICAgICAkKCcuc2xpZGVyLW5hdicpLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgYXNOYXZGb3I6ICcuc2xpZGVyLXdyYXBwZXInLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDdXN0b20gYXJyb3dzXG5cbiAgICAgICAgalF1ZXJ5KCcuc2xpZGVyLW5hdiAuc2xpY2stbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBqUXVlcnkoJy5zbGlkZXItbmF2Jykuc2xpY2soXCJzbGlja1ByZXZcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBqUXVlcnkoJy5zbGlkZXItbmF2IC5zbGljay1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBqUXVlcnkoJy5zbGlkZXItbmF2Jykuc2xpY2soXCJzbGlja05leHRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gQWNoaWV2ZW1lbnQgc2xpZGVyXG5cbiAgICAgICAgdmFyIGFjdGl2ZUNsYXNzID0gJ3NsaWNrLWFjdGl2ZScsXG4gICAgICAgICAgICBhcmlhQXR0cmlidXRlID0gJ2FyaWEtaGlkZGVuJztcbiAgICAgICAgJCggJy5hY2hpZXZlbWVudC1zbGlkZXInIClcbiAgICAgICAgICAgIC5vbiggJ2luaXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCAnLmN1c3RvbS1kb3RzIGxpOmZpcnN0LW9mLXR5cGUnICkuYWRkQ2xhc3MoIGFjdGl2ZUNsYXNzICkuYXR0ciggYXJpYUF0dHJpYnV0ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgLm9uKCAnYWZ0ZXJDaGFuZ2UnLCBmdW5jdGlvbiggZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUgKSB7XG4gICAgICAgICAgICAgICAgdmFyICRkb3RzID0gJCggJy5jdXN0b20tZG90cycgKTtcbiAgICAgICAgICAgICAgICAkKCAnbGknLCAkZG90cyApLnJlbW92ZUNsYXNzKCBhY3RpdmVDbGFzcyApLmF0dHIoIGFyaWFBdHRyaWJ1dGUsIHRydWUgKTtcbiAgICAgICAgICAgICAgICAkZG90cy5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCggJ2xpJywgJCggdGhpcyApICkuZXEoIGN1cnJlbnRTbGlkZSApLmFkZENsYXNzKCBhY3RpdmVDbGFzcyApLmF0dHIoIGFyaWFBdHRyaWJ1dGUsIGZhbHNlICk7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICQoJy5hY2hpZXZlbWVudC1zbGlkZXInKS5vbignaW5pdCcsIGZ1bmN0aW9uKGV2ZW50LCBzbGljayl7XG4gICAgICAgICAgICAkKCcuY3VycmVudC1jb3VudC0tYWNoJykuYXBwZW5kKCcxJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcuYWNoaWV2ZW1lbnQtc2xpZGVyJykuc2xpY2soe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgICAgICBhcHBlbmREb3RzOiAkKCcuY3VzdG9tLWRvdHMnKSxcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5hY2hpZXZlbWVudC1zbGlkZXInKVxuICAgICAgICAgICAgLm9uKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpe1xuICAgICAgICAgICAgICAgIC8vIGZpbmFsbHkgbGV0J3MgZG8gdGhpcyBhZnRlciBjaGFuZ2luZyBzbGlkZXNcbiAgICAgICAgICAgICAgICAkKCcuY3VycmVudC1jb3VudC0tYWNoJykuaHRtbChjdXJyZW50U2xpZGUrMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBDdXN0b20gYXJyb3dzXG5cbiAgICAgICAgalF1ZXJ5KCcuYWNoaWV2ZW1lbnQtc2xpZGVyIC5zbGljay1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGpRdWVyeSgnLmFjaGlldmVtZW50LXNsaWRlcicpLnNsaWNrKFwic2xpY2tQcmV2XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KCcuYWNoaWV2ZW1lbnQtc2xpZGVyIC5zbGljay1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBqUXVlcnkoJy5hY2hpZXZlbWVudC1zbGlkZXInKS5zbGljayhcInNsaWNrTmV4dFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVG90YWwgc2xpZGVzIGNvdW50XG5cbiAgICAgICAgdmFyIGFjaGlldmVtZW50VG90YWxTbGlkZXMgPSBqUXVlcnkoJy5hY2hpZXZlbWVudC1zbGlkZXIgLnNsaWNrLXNsaWRlOm5vdCguc2xpY2stY2xvbmVkKScpLmxlbmd0aDtcblxuICAgICAgICAkKCcudG90YWxfY291bnQnKS5hcHBlbmQoYWNoaWV2ZW1lbnRUb3RhbFNsaWRlcyk74oCLXG5cbiAgICAgICAgLy8gQ3VycmVudCBzbGlkZSBudW1iZXJcblxuICAgIC8vIENsaWVudHMgc2xpZGVyXG5cbiAgICAgICAgJCgnLmNsaWVudHMtc2xpZGVyJykuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDQwMDAsXG4gICAgICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICB9KTtcblxuICAgIC8vIFByYWN0aWNlc1xuXG4gICAgICAgICQoJy5wcmFjdGljZXMtbmF2IGxpOmZpcnN0LW9mLXR5cGUgYScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLnByYWN0aWNlcy13cmFwcGVyOmZpcnN0LW9mLXR5cGUnKS5zaG93KCk7XG5cbiAgICAgICAgJCgnLnByYWN0aWNlcy1uYXYgYScpLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoJy5wcmFjdGljZXMtbmF2IGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcbiAgICAgICAgICAgICQoXCIucHJhY3RpY2VzLXdyYXBwZXJcIikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIGlmKCQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKSA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyBUZWFtIHRhYnNcblxuICAgICAgICAkKCcjZmlsdGVycyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjZmlsdGVycyBhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB2YXIgb3B0aW9uU2VsZWN0ZWQgPSAkKHRoaXMpLmF0dHIoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICAgICQoJy50ZWFtLWl0ZW0nKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcudGVhbS1pdGVtW2RhdGEtZmlsdGVyKj1cIicgKyBvcHRpb25TZWxlY3RlZCArICdcIl0nKS5zaG93KCk7XG4gICAgICAgIH0pLmNoYW5nZSgpO1xuXG4gICAgICAgICQoJyNmaWx0ZXJzIGFbdmFsdWU9XCJhbGxcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcudGVhbS1pdGVtJykuc2hvdygpO1xuICAgICAgICB9KTtcblxufSk7Il19
