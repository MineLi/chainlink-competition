<script setup>
import { onBeforeUnmount, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

import { ElMessage } from "element-plus";

import apis from "@/x/server";

// import Header from "@/components/WhiskyPlus/Header/Index.vue";
// import Footer from "@/components/WhiskyPlus/Footer/Index.vue";

// import "@/assets/WhiskyPlus/js/scripts";

const router = useRouter();

// 表单数据
const contactForm = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  subject: "Message from RI-NFT website",
});

// 表单校验
const onValidate = (e) => {
  const input = e.target;
  const { patternMismatch, valueMissing } = e.target.validity;
  if (patternMismatch) {
    input.setCustomValidity("Please input correct email address");
  } else if (valueMissing) {
    input.setCustomValidity("Please input");
  } else input.setCustomValidity("");
};

// 发送消息
const sendMessage = async (event) => {
  event.preventDefault();

  const params = {
    name: contactForm.name,
    email: "hkter11@yahoo.com",
    phone: contactForm.phone,
    subject: contactForm.subject,
    message:
      "<p>Name: " +
      contactForm.name +
      "</p>" +
      "<p>Email: " +
      contactForm.email +
      "</p>" +
      "<p>Phone: " +
      contactForm.phone +
      "</p>" +
      "<p>Message: " +
      contactForm.message +
      "</p>",
  };

  const { code, msg } = await apis.nft.sendEmail(params);

  if (code === 0) {
    ElMessage.success("Message Sent Success");
  } else {
    ElMessage.error(msg);
  }
};

onMounted(() => {});

onBeforeUnmount(() => {});
</script>

<template>
  <div class="page-wrap">
    <main>
      <div class="cd-index cd-main-content">
        <div id="page-content"  class="dark-content" data-bgcolor="#eee">
          <!-- Header -->
          <!-- <Header :show-eth-info="false" /> -->
          <!--/Header -->
          <!-- Content Scroll -->
          <div id="content-scroll">
            <!-- Main -->
            <div id="main">
              <!-- Hero Section -->
              <div id="hero">
                <div id="hero-styles">
                  <div id="hero-caption" class="content-full-width parallax-scroll-caption marquee-title1">
                    <div class="inner">
                      <div class="hero-title-wrapper">
                        <h1 class="hero-title"><span>Get</span><span>in Touch</span></h1>
                      </div>
                      <div class="hero-subtitle-wrapper">
                        <h5 class="hero-subtitle"><span>info@ri-born.com</span></h5>
                      </div>
                    </div>
                  </div>
                  <div id="hero-footer">
                    <div class="hero-footer-left">
                      <div class="button-wrap right scroll-down">
                        <div class="icon-wrap parallax-wrap">
                          <div class="button-icon parallax-element">
                            <i class="arrow-icon-down"></i>
                          </div>
                        </div>
                        <div class="button-text sticky right">
                          <span data-hover="Scroll to Explore">Scroll to Explore</span>
                        </div>
                      </div>
                    </div>
                    <div class="hero-footer-right">
                      <div id="info-text">See on map our office</div>
                    </div>
                  </div>
                </div>
              </div>
              <!--/Hero Section -->

              <!-- Main Content -->
              <div id="main-content">
                <!-- Main Page Content -->
                <div id="main-page-content" class="content-max-width">
                  <!-- Row -->
                  <!--                  <div class="content-row full light-section" data-bgcolor="#eee">-->
                  <!--                    <div id="map_canvas"></div>-->
                  <!--                  </div>-->
                  <!--/Row -->

                  <!-- Row -->
                  <div
                    class="content-row row_padding_top row_padding_left row_padding_right row_padding_bottom full light-section"
                    data-bgcolor="#eee"
                  >
                    <div class="one_third">
                      <h6 class="has-mask">/ 01</h6>
                    </div>

                    <div class="two_third last">
                      <h6 class="has-mask">Drop us a line</h6>
                    </div>

                    <hr />
                    <hr />

                    <div class="one_third">
                      <h3 class="has-mask-fill no-margins">Let's Talk</h3>
                    </div>

                    <div class="two_third last">
                      <!-- Contact Formular -->
                      <div id="contact-formular">
                        <div id="message"></div>

                        <form name="contactform" id="contactform" @submit="sendMessage">
                          <div class="name-box has-animation" data-delay="100">
                            <input
                              required
                              name="name"
                              type="text"
                              id="name"
                              size="30"
                              placeholder="What's Your Name"
                              v-model="contactForm.name"
                              oninvalid="setCustomValidity('Please input')"
                              oninput="setCustomValidity('')"
                            /><label class="input_label"></label>
                          </div>
                          <div class="email-box has-animation" data-delay="150">
                            <input
                              required
                              name="email"
                              type="text"
                              id="email"
                              size="30"
                              placeholder="Your Email"
                              v-model="contactForm.email"
                              pattern="^([a-zA-Z\d])(\w|-|\.)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$"
                              :oninvalid="onValidate"
                              :oninput="onValidate"
                            /><label class="input_label"></label>
                          </div>
                          <div class="phone-box has-animation" data-delay="100">
                            <input
                              required
                              name="phone"
                              type="text"
                              id="phone"
                              size="30"
                              placeholder="What's Your Phone Number"
                              v-model="contactForm.phone"
                              oninvalid="setCustomValidity('Please input')"
                              oninput="setCustomValidity('')"
                            /><label class="input_label"></label>
                          </div>
                          <div class="message-box has-animation" data-delay="100">
                            <textarea
                              required
                              name="comments"
                              cols="40"
                              rows="4"
                              id="comments"
                              placeholder="Tell Us About Your Project"
                              v-model="contactForm.message"
                              oninvalid="setCustomValidity('Please input')"
                              oninput="setCustomValidity('')"
                            >
                            </textarea>
                            <label class="input_label slow"></label>
                          </div>

                          <div class="button-box has-animation" data-delay="100">
                            <div class="clapat-button-wrap parallax-wrap hide-ball">
                              <div class="clapat-button parallax-element">
                                <div class="button-border rounded parallax-element-second">
                                  <input type="submit" class="send_message" id="submit" value="Send Mail" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <!--/Contact Formular -->
                    </div>
                  </div>
                  <!--/Row -->

                  <!-- Row -->
                  <div class="content-row row_padding_left row_padding_right full light-section" data-bgcolor="#eee">
                    <hr class="animated-line has-animation" />

                    <div class="one_third">
                      <h6 class="has-mask">/ 02</h6>
                    </div>

                    <div class="two_third last">
                      <h6 class="has-mask">ONE OFFICES</h6>
                    </div>

                    <hr />
                    <hr />

                    <div class="one_third">
                      <h3 class="has-mask-fill no-margins">Offices</h3>
                    </div>

                    <div class="one_third">
                      <h5 class="">Find Us There</h5>
                      <h6 class="no-margins">www.lemonnft.io</h6>
                      <h6 class="no-margins">
                        <a href="mailto:info@lemonnft.io" class="link"><span>info@lemonnft.io</span></a>
                      </h6>
                      <h6 class="no-margins">(852) 3993-1277</h6>
                    </div>
                    <hr />
                  </div>
                  <!--/Row -->
                </div>
                <!--/Main Page Content -->

                <!-- Page Navigation -->
                <div id="page-nav">
                  <div class="page-nav-wrap">
                    <div class="page-nav-caption content-full-width block-title marquee-title">
                      <div class="inner">
                        <a class="next-ajax-link-page" href="#">
                          <div class="next-hero-title-wrapper">
                            <div class="next-hero-title"><span>More Case Studies</span></div>
                          </div>
                        </a>
                        <div class="next-hero-subtitle-wrapper">
                          <div class="next-hero-subtitle">
                            <span
                              >Indulge in an immersive whisky experience with our expertly crafted packaging
                              design</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--/Page Navigation -->
              </div>
              <!--/Main Content -->
            </div>
            <!--/Main -->
          </div>
          <!--/Content Scroll -->
          <div id="whisky-plus-app"></div>
        </div>
        <!--/Page Content -->
      </div>
    </main>

    <div class="cd-cover-layer"></div>
    <div id="magic-cursor">
      <div id="ball">
        <div id="ball-drag-x"></div>
        <div id="ball-drag-y"></div>
        <div id="ball-loader"></div>
      </div>
    </div>
    <div id="clone-image">
      <div class="hero-translate"></div>
    </div>
    <div id="rotate-device"></div>
  </div>
</template>
<style>
@import "~@/libs/styles/css/style.css";
</style>
<style lang="scss" scoped>
hr {
  color: unset;
  background-color: unset;
}

#contactform {
  input,
  textarea {
    text-transform: none;
  }

  .send_message {
    text-transform: uppercase;
  }
}
</style>
