import React from 'react'
import './Footer.css'

const Footers = () => {
  return (
      <div id="shopify-section-footer" className="shopify-section footer">
          <footer className="footer-section">
              <div className="footer-top">                  
                  <div className="d-flex justify-content-lg-between footer-top__wrapper footer-top__wrapper--4-column p-4">
                  {/* <div className='d-flex  justify-content-lg-between p-4'> */}
                      <div className="footer-top__block">
                          <p className="footer-top__block-heading" data-toggle-content="">
                              CONTACT US
                          </p>
                          <div className="footer-top__block-content" data-content="">
                              <p>
                                  Drop us an email to{" "} <br/>
                                  <a href="mailto:rescue@flatheads.in">rescue@flatheads.in </a>or
                              </p>
                              <p>
                                  Call us on{" "}
                                  <a href="tel:+917899136414" title="tel:+917899136414">
                                      +91 7899136414
                                  </a>
                              </p>
                              <p>(Calls available Mon-Fri, 10am-6pm)</p>
                          </div>
                      </div>
                      <div className="footer-top__block">
                          <p className="footer-top__block-heading" data-toggle-content="">
                              Help
                          </p>
                          <div className="footer-top__block-content" data-content="">
                              <ul className="footer-top__block-menu">
                                  <li>
                                      <a href="https://flatheads.wiq.app/">Track My Order</a>
                                  </li>
                                  <li>
                                      <a href="/pages/exchanges-returns">Exchanges &amp; Returns</a>
                                  </li>
                                  <li>
                                      <a href="/pages/faq">FAQ</a>
                                  </li>
                                  <li>
                                      <a href="/pages/contact-us">Contact Us</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="footer-top__block">
                          <p className="footer-top__block-heading" data-toggle-content="">
                              Footer Shop
                          </p>
                          <div className="footer-top__block-content" data-content="">
                              <ul className="footer-top__block-menu">
                                  <li>
                                      <a href="https://www.flatheads.in/collections/shop-men">Men</a>
                                  </li>
                                  <li>
                                      <a href="/collections/banana-kicks">Banana Kicks</a>
                                  </li>
                                  <li>
                                      <a href="/collections/softknit-loafers">SoftKnit Loafers</a>
                                  </li>
                                  <li>
                                      <a href="/collections/linen-sneakers">Linen Sneakers</a>
                                  </li>
                                  <li>
                                      <a href="/collections/kooltex-trainers">KoolTex Trainers</a>
                                  </li>
                                  <li>
                                      <a href="/collections/new-troos">New Troos Bamboo Loafers</a>
                                  </li>
                                  <li>
                                      <a href="/collections/ellipsis">Ellipsis Breathable Sneakers</a>
                                  </li>
                                  <li>
                                      <a href="/collections/luft-ultra-lightweight-shoes">
                                          Luft Ultralight Sneakers
                                      </a>
                                  </li>
                                  <li>
                                      <a href="https://www.flatheads.in/collections/bestsellers">
                                          Bestsellers
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/collections/all">Shop All</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="footer-top__block">
                          <p className="footer-top__block-heading" data-toggle-content="">
                              About
                          </p>
                          <div className="footer-top__block-content" data-content="">
                              <ul className="footer-top__block-menu">
                                  <li>
                                      <a href="/pages/features">Why Flatheads</a>
                                  </li>
                                  <li>
                                      <a href="/pages/about">Our Story</a>
                                  </li>
                                  <li>
                                      <a href="/pages/reviews">Customer Reviews</a>
                                  </li>
                                  <li>
                                      <a href="/blogs/flatheads-blog">Blog</a>
                                  </li>
                                  <li>
                                      <a href="/pages/press">In The Press</a>
                                  </li>
                                  <li>
                                      <a href="/policies/privacy-policy">Privacy Policy</a>
                                  </li>
                                  <li>
                                      <a href="/policies/terms-of-service">Terms of Service</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-bottom">
                  <div className="footer-bottom__wrapper">
                      <div className="footer-bottom__left">
                          <div className="shopify-cross-border"></div>
                          <p className="footer-bottom__credits">
                              © 2023{" "}
                              <a href="/" title="">
                                  Flatheads
                              </a>
                              .
                              {/*           <a target="_blank" rel="nofollow" href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore">Powered by Shopify</a> */}
                          </p>
                      </div>
                      <div className="footer-bottom__right">
                          <ul className="social-icons">
                              <li className="twitter">
                                  <a
                                      href="https://twitter.com/flatheads_in"
                                      aria-label="Flatheads on Twitter"
                                      rel="me"
                                      target="_blank"
                                  >
                                      <svg
                                          width={20}
                                          height={20}
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M20 3.89468C19.4351 4.71404 18.7571 5.40866 17.9662 5.97853C17.9662 6.03442 17.9731 6.12134 17.987 6.23926C18.0009 6.35719 18.0078 6.4441 18.0078 6.5C18.0078 7.58316 17.8452 8.66667 17.5201 9.75051C17.195 10.8344 16.7008 11.8691 16.0374 12.8548C15.3741 13.8405 14.5866 14.7154 13.6751 15.4795C12.7635 16.2437 11.669 16.8548 10.3915 17.3129C9.11394 17.771 7.7404 18 6.27086 18C3.98267 18 1.89238 17.3957 0 16.1871C0.395806 16.2151 0.720562 16.229 0.974266 16.229C2.88121 16.229 4.58331 15.6595 6.08058 14.5204C5.19054 14.5068 4.39615 14.2396 3.69743 13.7188C2.9987 13.198 2.50793 12.5279 2.22511 11.7086C2.46495 11.7645 2.72628 11.7924 3.0091 11.7924C3.39035 11.7924 3.75045 11.7369 4.08942 11.6258C3.14323 11.4315 2.35924 10.9663 1.73746 10.2301C1.11567 9.49386 0.804783 8.64656 0.804783 7.68814V7.64622C1.3413 7.92433 1.95581 8.07703 2.6483 8.10429C2.09722 7.74301 1.65947 7.26721 1.33507 6.67689C1.01066 6.08657 0.848107 5.45126 0.847414 4.77096C0.847414 4.07635 1.02383 3.39571 1.37666 2.72904C2.40742 3.99284 3.65376 4.98943 5.11567 5.71881C6.57759 6.44819 8.1629 6.85446 9.87159 6.93763C9.77246 6.59066 9.7229 6.28493 9.7229 6.02045C9.7229 4.90934 10.1253 3.96149 10.9301 3.17689C11.7349 2.3923 12.7164 2 13.8747 2C14.4396 2 14.9834 2.11111 15.5061 2.33333C16.0288 2.55556 16.4738 2.8681 16.8412 3.27096C17.7735 3.09032 18.6421 2.7638 19.4468 2.29141C19.1502 3.2362 18.5499 3.97921 17.646 4.52045C18.5076 4.40934 19.2916 4.20109 19.9979 3.89571L20 3.89468Z"
                                              fill="currentColor"
                                          />
                                      </svg>
                                  </a>
                              </li>
                              <li className="facebook">
                                  <a
                                      href="https://www.facebook.com/flatheadsofficial"
                                      aria-label="Flatheads on Facebook"
                                      rel="me"
                                      target="_blank"
                                  >
                                      <svg
                                          width={20}
                                          height={20}
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <g>
                                              <path
                                                  d="M0.00195312 10.002C0.00311667 14.9214 3.58036 19.1101 8.43895 19.881V12.892H5.90195V10.002H8.44195V7.80204C8.32841 6.75958 8.68447 5.72064 9.41359 4.96698C10.1427 4.21332 11.1693 3.82306 12.215 3.90204C12.9655 3.91417 13.7141 3.98101 14.455 4.10205V6.56104H13.191C12.7558 6.50405 12.3183 6.64777 12.0017 6.95171C11.6851 7.25566 11.5237 7.68693 11.563 8.12404V10.002H14.334L13.891 12.893H11.563V19.881C16.8174 19.0506 20.502 14.2518 19.9475 8.96112C19.3929 3.67041 14.7932 -0.260027 9.48078 0.0172227C4.16831 0.294472 0.0027976 4.68235 0.00195312 10.002Z"
                                                  fill="currentColor"
                                              />
                                          </g>
                                      </svg>
                                  </a>
                              </li>
                              <li className="youtube">
                                  <a
                                      href="https://www.youtube.com/c/Flatheads/videos"
                                      aria-label="Flatheads on YouTube"
                                      rel="me"
                                      target="_blank"
                                  >
                                      <svg
                                          width={20}
                                          height={20}
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <g>
                                              <path
                                                  d="M10.0207 17.012H10.0007C9.93865 17.012 3.73565 17 2.17065 16.575C1.31007 16.3432 0.638002 15.6707 0.406653 14.81C0.125231 13.2224 -0.0106662 11.6123 0.000652814 10C-0.00661805 8.38501 0.132956 6.77271 0.417653 5.183C0.65536 4.32151 1.32448 3.64595 2.18365 3.4C3.70565 3 9.73765 3 9.99365 3H10.0147C10.0777 3 16.2967 3.012 17.8457 3.437C18.7044 3.67001 19.3751 4.3411 19.6077 5.2C19.898 6.79354 20.0343 8.41134 20.0147 10.031C20.0217 11.644 19.8818 13.2543 19.5967 14.842C19.3623 15.7016 18.6898 16.3726 17.8297 16.605C16.3097 17.008 10.2767 17.012 10.0207 17.012ZM8.02065 7.005L8.01565 13.005L13.2277 10.005L8.02065 7.005Z"
                                                  fill="currentColor"
                                              />
                                          </g>
                                      </svg>
                                  </a>
                              </li>
                              <li className="linkedin">
                                  <a
                                      href="https://www.linkedin.com/company/flatheadsofficial/"
                                      aria-label="Flatheads on LinkedIn"
                                      rel="me"
                                      target="_blank"
                                  >
                                      <svg
                                          width={20}
                                          height={20}
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M15.722 15.7221H13.3134V11.9509C13.3134 11.0512 13.2969 9.89449 12.061 9.89449C10.8067 9.89449 10.6147 10.8742 10.6147 11.8858V15.7221H8.20618V7.96717H10.5183V9.02669H10.5504C10.872 8.41709 11.6582 7.7742 12.8308 7.7742C15.2714 7.7742 15.722 9.38036 15.722 11.4684V15.7221ZM5.48995 6.90708C4.7174 6.90708 4.09211 6.28067 4.09211 5.50925C4.09211 4.73839 4.7174 4.1122 5.48995 4.1122C6.26047 4.1122 6.88666 4.73839 6.88666 5.50925C6.88666 6.28067 6.26047 6.90708 5.48995 6.90708ZM4.28429 15.7221p.69459V7.96717H4.28429V15.7221ZM16.9224 1.875H3.07445C2.41272 1.875 1.875 2.39951 1.875 3.04624V16.9524C1.875 17.5997 2.41272 18.125 3.07445 18.125H16.9224C17.5853 18.125 18.1252 17.5997 18.1252 16.9524V3.04624C18.1252 2.39951 17.5853 1.875 16.9224 1.875Z"
                                              fill="currentColor"
                                          />
                                      </svg>
                                  </a>
                              </li>
                              <li className="instagram">
                                  <a
                                      href="https://www.instagram.com/flatheadsofficial/"
                                      aria-label="Flatheads on Instagram"
                                      rel="me"
                                      target="_blank"
                                  >
                                      <svg
                                          width={20}
                                          height={20}
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10 1.93347C12.6289 1.93347 12.9375 1.94519 13.9766 1.99207C14.9375 2.03503 15.457 2.19519 15.8047 2.33191C16.2656 2.5116 16.5938 2.72253 16.9375 3.06628C17.2813 3.41003 17.4961 3.73816 17.6719 4.1991C17.8047 4.54675 17.9688 5.06628 18.0117 6.02722C18.0586 7.06628 18.0703 7.37488 18.0703 10.0038C18.0703 12.6327 18.0586 12.9413 18.0117 13.9803C17.9688 14.9413 17.8086 15.4608 17.6719 15.8085C17.4922 16.2694 17.2813 16.5975 16.9375 16.9413C16.5938 17.285 16.2656 17.4999 15.8047 17.6757C15.457 17.8085 14.9375 17.9725 13.9766 18.0155C12.9375 18.0624 12.6289 18.0741 10 18.0741C7.37109 18.0741 7.0625 18.0624 6.02344 18.0155C5.0625 17.9725 4.54297 17.8124 4.19531 17.6757C3.73438 17.496 3.40625 17.285 3.0625 16.9413C2.71875 16.5975 2.50391 16.2694 2.32813 15.8085C2.19531 15.4608 2.03125 14.9413 1.98828 13.9803C1.94141 12.9413 1.92969 12.6327 1.92969 10.0038C1.92969 7.37488 1.94141 7.06628 1.98828 6.02722C2.03125 5.06628 2.19141 4.54675 2.32813 4.1991C2.50781 3.73816 2.71875 3.41003 3.0625 3.06628C3.40625 2.72253 3.73438 2.50769 4.19531 2.33191C4.54297 2.1991 5.0625 2.03503 6.02344 1.99207C7.0625 1.94128 7.37109 1.93347 10 1.93347ZM10 0.160034C7.32813 0.160034 6.99219 0.171753 5.94141 0.218628C4.89453 0.265503 4.17969 0.433472 3.55469 0.675659C2.90625 0.925659 2.35938 1.2655 1.8125 1.81238C1.26563 2.35925 0.929688 2.91003 0.675781 3.55457C0.433594 4.17957 0.265625 4.89441 0.21875 5.94519C0.171875 6.99206 0.160156 7.328 0.160156 9.99988C0.160156 12.6718 0.171875 13.0077 0.21875 14.0585C0.265625 15.1053 0.433594 15.8202 0.675781 16.4491C0.925781 17.0975 1.26563 17.6444 1.8125 18.1913C2.35938 18.7382 2.91016 19.0741 3.55469 19.328C4.17969 19.5702 4.89453 19.7382 5.94531 19.785C6.99609 19.8319 7.32813 19.8436 10.0039 19.8436C12.6797 19.8436 13.0117 19.8319 14.0625 19.785C15.1094 19.7382 15.8242 19.5702 16.4531 19.328C17.1016 19.078 17.6484 18.7382 18.1953 18.1913C18.7422 17.6444 19.0781 17.0936 19.332 16.4491C19.5742 15.8241 19.7422 15.1093 19.7891 14.0585C19.8359 13.0077 19.8477 12.6757 19.8477 9.99988C19.8477 7.3241 19.8359 6.99207 19.7891 5.94128C19.7422 4.89441 19.5742 4.17957 19.332 3.55066C19.082 2.90222 18.7422 2.35535 18.1953 1.80847C17.6484 1.2616 17.0977 0.925659 16.4531 0.671753C15.8281 0.429565 15.1133 0.261597 14.0625 0.214722C13.0078 0.171753 12.6719 0.160034 10 0.160034Z"
                                              fill="currentColor"
                                          />
                                          <path
                                              d="M10 4.94519C7.21094 4.94519 4.94531 7.20691 4.94531 9.99988C4.94531 12.7928 7.21094 15.0546 10 15.0546C12.7891 15.0546 15.0547 12.7889 15.0547 9.99988C15.0547 7.21082 12.7891 4.94519 10 4.94519ZM10 13.2811C8.1875 13.2811 6.71875 11.8124 6.71875 9.99988C6.71875 8.18738 8.1875 6.71863 10 6.71863C11.8125 6.71863 13.2812 8.18738 13.2812 9.99988C13.2812 11.8124 11.8125 13.2811 10 13.2811Z"
                                              fill="currentColor"
                                          />
                                          <path
                                              d="M15.2539 5.92578C15.9054 5.92578 16.4336 5.39762 16.4336 4.74609C16.4336 4.09457 15.9054 3.56641 15.2539 3.56641C14.6024 3.56641 14.0742 4.09457 14.0742 4.74609C14.0742 5.39762 14.6024 5.92578 15.2539 5.92578Z"
                                              fill="currentColor"
                                          />
                                      </svg>
                                  </a>
                              </li>
                              <li className="email">
                                  <a
                                      href="mailto:rescue@flatheads.in"
                                      aria-label="Email Flatheads"
                                      rel="me"
                                      target="_blank"
                                  >
                                      <svg
                                          width={20}
                                          height={20}
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M1.0132 7.15129C1 7.69022 1 8.30205 1 9V11C1 13.8284 1 15.2426 1.87868 16.1213C2.75736 17 4.17157 17 7 17H13C15.8284 17 17.2426 17 18.1213 16.1213C19 15.2426 19 13.8284 19 11V9C19 8.30205 19 7.69022 18.9868 7.15129L10.9713 11.6044C10.3672 11.9399 9.63276 11.9399 9.02871 11.6044L1.0132 7.15129ZM1.24297 5.02971C1.32584 5.05052 1.4074 5.08237 1.48564 5.12584L10 9.85604L18.5144 5.12584C18.5926 5.08237 18.6742 5.05052 18.757 5.02971C18.6271 4.55619 18.4276 4.18491 18.1213 3.87868C17.2426 3 15.8284 3 13 3H7C4.17157 3 2.75736 3 1.87868 3.87868C1.57245 4.18491 1.37294 4.55619 1.24297 5.02971Z"
                                              fill="currentColor"
                                          />
                                      </svg>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </footer>
      </div>

  )
}

export default Footers
