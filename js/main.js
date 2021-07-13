// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
// Get close buttons
const closeBtn = document.getElementById('closeBtn');
const closeX = document.getElementById('closeX');

// Listen for click
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeX.addEventListener('click', closeModal);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

function function1 () {
    src="//widget.simplybook.me/v2/widget/widget.js"
}

function function2 () {
    var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/brighthomephotography.simplybook.me","theme":"minimal","theme_settings":{"timeline_show_end_time":"0","timeline_modern_display":"as_slots","hide_company_label":"1","timeline_hide_unavailable":"1","hide_past_days":"0","sb_base_color":"#6c1e7c","btn_color_1":"#6c1e7c,#6c1e7c,#6c1e7c","link_color":"#6c1e7c","display_item_mode":"block","body_bg_color":"#fdfbe9","sb_review_image":"27","sb_review_image_preview":"\/uploads\/brighthomephotography\/image_files\/preview\/bbf938a76487cc111dc78dc1364d81f8.png","dark_font_color":"#000000","light_font_color":"#ffffff","sb_company_label_color":"#6c1e7c","hide_img_mode":"1","sb_busy":"#aaa6aa","sb_available":"#000000"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":{"provider":"1","service":"4"}}});
}
    