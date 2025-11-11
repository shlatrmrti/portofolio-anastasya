$(document).ready(function () {
  // ✅ On Click Navbar
  $(".nav-link").click(function (e) {
    e.preventDefault();

    const targetClass = $(this).data("target");
    const target = $("." + targetClass);
    const headerHeight = $(".header").outerHeight() || 0; // get fixed header height

    if (target.length) {
      $("html, body").animate(
        { scrollTop: target.offset().top - headerHeight + 20 }, // minus few px for spacing
        600
      );
    }
  });

  // Back to Top Button
  const btn = $("#back-to-top");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry, "<<< ENTRY");
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".about-left, .about-right")
    .forEach((el) => observer.observe(el));
});
