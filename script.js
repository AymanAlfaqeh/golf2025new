// عرض تفاصيل الحزمة المختارة
function showPackageDetails() {
    const packageSelect = document.getElementById("packageSelect");
    const packageDetails = document.getElementById("packageDetails");
    const bookingSection = document.getElementById("bookingSection");
    const customPackageForm = document.getElementById("customPackageForm");

    packageDetails.innerHTML = "";
    bookingSection.style.display = "none";
    customPackageForm.style.display = "none";

    switch (packageSelect.value) {
        case "fiveRounds":
            packageDetails.innerHTML = `
                <h3>حزمة خمس جولات</h3>
                <ul>
                    <li>إقامة كاملة لمدة خمس ليالٍ في جناح فاخر</li>
                    <li>خمس جولات - 18 حفرة</li>
                    <li>جولة واحدة مضمونة في ملعب "سي فيو" الشهير</li>
                    <li>جلسة تدريب رقمية مجانية</li>
                </ul>`;
            bookingSection.style.display = "block";
            break;

        case "threeRounds":
            packageDetails.innerHTML = `
                <h3>حزمة الجولة الثلاثية</h3>
                <ul>
                    <li>إقامة لمدة ليلتين في غرفة مزدوجة مع وجبة الإفطار</li>
                    <li>ثلاث جولات - 18 حفرة (تشمل ملعب "سي فيو" إن وجد)</li>
                    <li>تأجير مجاني للعربات</li>
                    <li>خصم 2% لمتجر المحترفين</li>
                </ul>`;
            bookingSection.style.display = "block";
            break;

        case "relaxation":
            packageDetails.innerHTML = `
                <h3>حزمة استراحة استجمام</h3>
                <ul>
                    <li>إقامة لليلة واحدة مع وجبة إفطار كاملة</li>
                    <li>تناول العشاء في أي من مطاعم المنتجع</li>
                    <li>الوصول إلى الملاعب (تطبق الرسوم، يستثنى ملعب "سي فيو")</li>
                    <li>تأجير نادي مجاني</li>
                </ul>`;
            bookingSection.style.display = "block";
            break;

        case "custom":
            packageDetails.innerHTML = "<h3>حزمة مخصصة</h3><p>يرجى تعبئة النموذج أدناه وسنتواصل معك قريبًا.</p>";
            customPackageForm.style.display = "block";
            break;

        default:
            packageDetails.innerHTML = "";
    }
}

// تأكيد الحجز عند الضغط على الزر
function confirmBooking() {
    alert("تم تأكيد حجزك بنجاح! سنتواصل معك قريبًا لتأكيد التفاصيل.");
}

// إرسال طلب الحزمة المخصصة
function submitCustomPackage() {
    alert("تم إرسال طلب الحزمة المخصصة بنجاح! سنتواصل معك قريبًا.");
}


// عرض تفاصيل الخدمة المختارة
function showFacilityDetails() {
    const facilitySelect = document.getElementById("facilitySelect");
    const facilityDetails = document.getElementById("facilityDetails");
    const subscribeSection = document.getElementById("subscribeSection");

    facilityDetails.innerHTML = "";
    subscribeSection.style.display = "none";

    let content = "";

    switch (facilitySelect.value) {
        case "golfCourse":
            content = `
                <h3>ملاعب الجولف</h3>
                <p>استمتع بتجربة لا مثيل لها في ثلاثة ملاعب عالمية المستوى، بما في ذلك ملعب "سي فيو" الشهير.</p>
                <div class="image-gallery">
                    <img src="الملاعب.jpg" alt="ملعب جولف">
                    <img src="الملاعب _02.jpg" alt="ملعب جولف آخر">
                </div>`;
            subscribeSection.style.display = "block";
            break;

        case "clubhouse":
            content = `
                <h3>النوادي</h3>
                <p>استرخِ بعد جولتك في واحد من نوادينا الفاخرة، حيث يمكنك الاستمتاع بالأجواء الراقية.</p>
                <div class="image-gallery">
                    <img src="النادي.jpg" alt="نادي الجولف">
                    <img src="النادي_02.jpg" alt="الاستراحة في النادي">
                </div>`;
            subscribeSection.style.display = "block";
            break;

        case "hotel":
            content = `
                <h3>الإقامة في الفنادق</h3>
                <p>تمتع بإقامة فاخرة في أحد فنادق المنتجع المجهزة بأفضل وسائل الراحة والخدمات.</p>
                <div class="image-gallery">
                    <img src="فندق.jpg" alt="غرفة فندقية">
                    <img src="الفندق_02.jpg" alt="إطلالة فندقية رائعة">
                </div>`;
            subscribeSection.style.display = "block";
            break;

        case "restaurant":
            content = `
                <h3>المطاعم والمقاهي</h3>
                <p>تذوق أشهى الأطباق العالمية والمحلية في مطاعم المنتجع الفاخرة.</p>
                <div class="image-gallery">
                    <img src="المطعم_02.jpg" alt="مطعم فاخر">
                    <img src="المطعم.jpg" alt="طبق فاخر">
                </div>`;
            subscribeSection.style.display = "block";
            break;

        case "proShop":
            content = `
                <h3>متجر المحترفين</h3>
                <p>احصل على أحدث المعدات والملابس الخاصة بالجولف من متجر المحترفين لدينا.</p>
                <div class="image-gallery">
                    <img src="shop.jpg" alt="متجر المحترفين">
                    <img src="shop_02.jpg" alt="معدات الجولف">
                </div>`;
            subscribeSection.style.display = "block";
            break;

        case "training":
            content = `
                <h3>ساحة التدريب ودروس الجولف</h3>
                <p>طور مهاراتك مع دروس الجولف المقدمة من مدربين محترفين في ساحة التدريب المتطورة.</p>
                <div class="image-gallery">
                    <img src="تدريب.jpg" alt="تدريب الجولف">
                    <img src="تدريب_02.jpg" alt="مدرب جولف محترف">
                </div>`;
            subscribeSection.style.display = "block";
            break;

        default:
            content = "";
    }

    facilityDetails.innerHTML = content;
}

// تأكيد الاشتراك بالخدمة
function confirmSubscription() {
    alert("تم الاشتراك بالخدمة بنجاح! نرحب بك في منتجع هول إن ون.");
}
// تشغيل الفيديو في الصفحة الرئيسية
document.addEventListener("DOMContentLoaded", function() {
    const playVideoButton = document.getElementById("playVideo");
    const promoVideo = document.getElementById("promoVideo");

    playVideoButton.addEventListener("click", function() {
        promoVideo.style.display = "block";  // إظهار الفيديو
        promoVideo.play();  // تشغيل الفيديو تلقائيًا
        playVideoButton.style.display = "none"; // إخفاء زر التشغيل بعد الضغط عليه
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".gallery-item"); // استهداف الصور داخل المعرض
    const modal = document.getElementById("imageModal");
    const largeImage = document.getElementById("largeImage");
    const closeButton = document.querySelector(".close");

    thumbnails.forEach(img => {
        img.addEventListener("click", function() {
            largeImage.src = this.src; // نقل مصدر الصورة المصغرة إلى الصورة الكبيرة
            modal.style.display = "flex"; // عرض الـ modal
        });
    });

    // إغلاق الصورة عند الضغط على زر الإغلاق
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // إغلاق الصورة عند الضغط خارجها
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// صفحة التواصل
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitButton = form.querySelector("button[type='submit']");
    const inputs = form.querySelectorAll("input, textarea");
    const errorMessage = document.createElement("p");

    // إعداد رسالة الخطأ
    errorMessage.textContent = "يرجى ملء جميع الحقول قبل الإرسال.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "none"; // إخفاء الرسالة في البداية
    form.appendChild(errorMessage);

    // تعطيل زر الإرسال في البداية
    submitButton.disabled = true;

    // وظيفة للتحقق من امتلاء جميع الحقول
    function checkFormValidity() {
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });

        submitButton.disabled = !isValid;
        errorMessage.style.display = isValid ? "none" : "block"; // إظهار أو إخفاء الرسالة
    }

    // التحقق عند إدخال البيانات في أي حقل
    inputs.forEach(input => {
        input.addEventListener("input", checkFormValidity);
    });

    // عند إرسال النموذج
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        if (submitButton.disabled) {
            errorMessage.style.display = "block"; // عرض رسالة التنبيه
            return;
        }

        alert("تم استلام رسالتك بنجاح! سنتواصل معك قريبًا."); // عرض رسالة التأكيد

        // إعادة تعيين النموذج بعد الإرسال
        form.reset();
        submitButton.disabled = true; // تعطيل زر الإرسال بعد إعادة التعيين
        errorMessage.style.display = "none"; // إخفاء رسالة الخطأ بعد الإرسال
    });
});
