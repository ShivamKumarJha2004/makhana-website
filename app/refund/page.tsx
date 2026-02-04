import React from 'react';
import { Clock, CheckCircle, XCircle, AlertCircle, Package, CreditCard, Shield, FileText, RefreshCw, Utensils } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Navbar />
      {/* Header */}
      <div className="bg-white text-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
          <p className="text-xl text-orange-500">Maakhana - Premium Subscription Food Service</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Introduction */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            At Maakhana, we are committed to delivering fresh, premium quality makhana (fox nuts) 
            through our convenient monthly subscription service. We understand that sometimes 
            circumstances change, and we have designed our refund and cancellation policy to be 
            fair and transparent for all our valued subscribers.
          </p>
        </div>

        {/* Subscription Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <RefreshCw className="w-8 h-8 text-amber-600" />
            About Your Subscription
          </h2>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Utensils className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Monthly Delivery Service</h4>
                  <p className="text-gray-700">Fresh makhana delivered to your doorstep every month</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Flexible Plans</h4>
                  <p className="text-gray-700">Choose from various subscription tiers based on your consumption needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Auto-Renewal</h4>
                  <p className="text-gray-700">Your subscription renews automatically each month unless cancelled</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Cancellation & Refund Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Clock className="w-8 h-8 text-amber-600" />
            Subscription Cancellation & Refund Timeline
          </h2>
          
          <div className="space-y-6">
            {/* Same Day Cancellation */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Same Day Cancellation</h3>
                  <p className="text-gray-700 mb-2">
                    If you cancel your subscription on the same day of payment/renewal, you are eligible for a <span className="font-bold text-green-700">100% full refund</span>.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">No questions asked. Full subscription amount will be credited back to your original payment method.</p>
                  <div className="bg-green-100 p-3 rounded mt-2">
                    <p className="text-sm text-green-800">
                      <strong>Important:</strong> Cancellation must be initiated before the monthly delivery is dispatched.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Within 10 Days */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">Cancellation Within 10 Days</h3>
                  <p className="text-gray-700 mb-2">
                    Subscription cancellations made between 1-10 days from the payment/renewal date will incur a processing and preparation fee of <span className="font-bold text-yellow-700">30-40%</span>.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">The remaining 60-70% will be refunded to your original payment method within 5-7 business days.</p>
                  <div className="bg-yellow-100 p-3 rounded mt-2 space-y-2">
                    <p className="text-sm text-yellow-800">
                      <strong>Processing Fee Breakdown:</strong>
                    </p>
                    <ul className="text-sm text-yellow-800 ml-4 space-y-1">
                      <li>• 30% fee: If delivery has not been prepared</li>
                      <li>• 35% fee: If items are being packaged</li>
                      <li>• 40% fee: If delivery is ready for dispatch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* After 10 Days */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-red-800 mb-2">After 10 Days - No Refund</h3>
                  <p className="text-gray-700 mb-2">
                    Subscriptions cannot be cancelled with a refund after 10 days from the monthly payment/renewal date.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">However, you can still cancel to prevent future renewals. The current month's subscription will continue as scheduled.</p>
                  <div className="bg-red-100 p-3 rounded mt-2">
                    <p className="text-sm text-red-800">
                      <strong>Note:</strong> This policy ensures we can maintain fresh inventory and support our local farmers who prepare your makhana in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pause Subscription Option */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <RefreshCw className="w-8 h-8 text-amber-600" />
            Pause Your Subscription (Alternative to Cancellation)
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Not ready to cancel completely? You can pause your subscription for up to 3 months!
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Pause anytime without losing your subscription benefits</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">No fees or penalties for pausing</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Resume delivery whenever you're ready</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Perfect for vacations, travel, or temporary changes in consumption</p>
              </div>
            </div>
          </div>
        </div>

        {/* Refund Eligibility Criteria */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-amber-600" />
            Refund Eligibility Criteria
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Cancellation request must be submitted through your account dashboard or customer support</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Subscription must be active and payment must have been successfully processed</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Once the monthly delivery is dispatched, that month's subscription becomes non-refundable</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">First-time subscribers have a 7-day satisfaction guarantee (see special offer below)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Promotional or discounted subscriptions may have different terms as specified at the time of purchase</p>
            </div>
          </div>
        </div>

        {/* First-Time Subscriber Guarantee */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">First-Time Subscriber Guarantee</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-10 h-10 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Try Risk-Free!</h3>
                <p className="text-gray-700 mb-3">
                  We're confident you'll love our premium makhana. That's why we offer a special guarantee for first-time subscribers:
                </p>
              </div>
            </div>
            <div className="space-y-3 ml-14">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">If you're not satisfied with your first delivery, cancel within 7 days of receiving your package</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Receive a full refund, no questions asked</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">This guarantee applies only to your first subscription order</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance & Food Safety */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Package className="w-8 h-8 text-amber-600" />
            Quality Assurance & Food Safety
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              We take food safety and quality seriously. If you receive makhana that is damaged, stale, 
              contaminated, or does not meet our quality standards:
            </p>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Report the issue within 48 hours of delivery with photos/video evidence</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Keep the product in its original packaging for verification</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">We will arrange for immediate replacement or provide full refund</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Free return pickup will be arranged at no cost to you</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-semibold mb-2">
                Quality-related issues are exempt from the standard refund timeline and processing fees.
              </p>
              <p className="text-green-700 text-sm">
                Your health and satisfaction are our top priorities. We maintain FSSAI certification 
                and follow strict quality control measures for all our products.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Issues */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Delivery & Shipping Issues</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Non-Delivery</h4>
                <p className="text-gray-700 text-sm mb-2">If your monthly delivery doesn't arrive within the expected timeframe:</p>
                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                  <li>• Full refund or free replacement</li>
                  <li>• No processing fees applied</li>
                  <li>• Priority delivery for next shipment</li>
                </ul>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Wrong Address</h4>
                <p className="text-gray-700 text-sm mb-2">If delivery fails due to incorrect address provided by subscriber:</p>
                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                  <li>• Re-delivery charges may apply</li>
                  <li>• Update address in account settings</li>
                  <li>• Contact support within 24 hours</li>
                </ul>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Package Damage in Transit</h4>
                <p className="text-gray-700 text-sm mb-2">If packaging is damaged during shipping:</p>
                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                  <li>• Document damage with photos</li>
                  <li>• Immediate replacement provided</li>
                  <li>• No cost to subscriber</li>
                </ul>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Delayed Delivery</h4>
                <p className="text-gray-700 text-sm mb-2">If delivery is significantly delayed (5+ days):</p>
                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                  <li>• Discount on next month's subscription</li>
                  <li>• Option to cancel current order</li>
                  <li>• Full refund if cancellation requested</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How to Cancel Subscription & Request Refund */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-amber-600" />
            How to Cancel Subscription & Request Refund
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Log into Your Account</h4>
                  <p className="text-gray-600">Visit your account dashboard at maakhana.com/account</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Navigate to Subscription Management</h4>
                  <p className="text-gray-600">Click on "My Subscriptions" or "Manage Subscription"</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Select Cancellation Option</h4>
                  <p className="text-gray-600">Choose "Cancel Subscription" or "Request Refund" and provide your reason (optional but helpful)</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Review Refund Amount</h4>
                  <p className="text-gray-600">System will automatically calculate your eligible refund based on the timeline</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Confirm Cancellation</h4>
                  <p className="text-gray-600">You'll receive an email confirmation with refund details within 24 hours</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">6</span>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Refund Processing</h4>
                  <p className="text-gray-600">Approved refunds will be processed within 5-7 business days to your original payment method</p>
                </div>
              </li>
            </ol>
            
            <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-800 font-semibold mb-2">Alternative: Contact Customer Support</p>
              <p className="text-blue-700 text-sm">If you prefer personal assistance, our support team is ready to help you through the cancellation process at support@maakhana.com or via phone.</p>
            </div>
          </div>
        </div>

        {/* Payment Method Refunds */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-amber-600" />
            Refund Payment Methods
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Credit/Debit Card</h4>
                <p className="text-gray-600 text-sm">Refunds will be credited to the original card within 5-7 business days</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">UPI/Net Banking</h4>
                <p className="text-gray-600 text-sm">Refunds will be processed to your original payment account within 3-5 business days</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Cash on Delivery</h4>
                <p className="text-gray-600 text-sm">Bank transfer will be initiated after receiving your account details</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-2">Digital Wallets</h4>
                <p className="text-gray-600 text-sm">Refunds will be credited to your wallet within 2-3 business days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Compliance & Food Safety Standards */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Legal Compliance & Food Safety Standards</h2>
          
          <div className="bg-gray-50 rounded-lg shadow-md p-6 space-y-4">
            <p className="text-gray-700">
              This refund policy is governed by and complies with the following regulations:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Consumer Protection Act, 2019 - ensuring consumer rights and fair business practices</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Food Safety and Standards Act, 2006 (FSSAI) - maintaining food quality and safety standards</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">E-commerce regulations and guidelines as per applicable Indian laws</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Information Technology Act, 2000 - for digital transactions and data protection</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg mt-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">FSSAI License Information</h4>
              <p className="text-gray-700 text-sm mb-2">
                Maakhana operates under FSSAI License No. [Your License Number]
              </p>
              <p className="text-gray-600 text-sm">
                All our products meet the food safety standards set by the Food Safety and Standards Authority of India.
              </p>
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Maakhana reserves the right to modify this refund policy with 15 days prior notice to active subscribers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">All refunds are subject to verification and approval by Maakhana management team</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Any disputes will be subject to the jurisdiction of courts in [Your City], India</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">This policy is effective from the date of subscription and supersedes all previous refund policies</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Force majeure events (natural disasters, pandemics, government restrictions) may affect refund timelines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Refundable Situations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Non-Refundable Situations</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">The following situations are not eligible for refund:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Subscriptions cancelled more than 10 days after the monthly payment date</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Deliveries that have already been dispatched or delivered</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Partially consumed subscription packages (unless product quality issue)</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Change of mind after accepting the delivery and opening the package</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Subscription add-ons or promotional items (unless part of a quality complaint)</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Delivery delays caused by incorrect address provided by subscriber</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Failure to receive delivery due to subscriber unavailability after multiple delivery attempts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Modifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Subscription Plan Changes</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Want to modify your subscription instead of cancelling? Here are your options:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Upgrade Plan</h4>
                <p className="text-gray-700 text-sm">Switch to a larger quantity plan anytime. Price difference will be prorated.</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Downgrade Plan</h4>
                <p className="text-gray-700 text-sm">Move to a smaller plan. Changes take effect from next billing cycle.</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Change Delivery Frequency</h4>
                <p className="text-gray-700 text-sm">Adjust delivery schedule to bi-weekly or monthly based on your needs.</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Customize Flavors</h4>
                <p className="text-gray-700 text-sm">Update your flavor preferences for upcoming deliveries at no extra cost.</p>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-3 rounded">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Plan modifications do not incur any fees and can be done anytime through your account dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Need Help with Your Subscription?</h2>
          <p className="mb-6">Our dedicated customer support team is here to assist you with cancellations, refunds, or any subscription-related queries.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-1 flex items-center gap-2">
                <span>📧</span> Email Support
              </p>
              <p className="text-amber-100">support@maakhana.com</p>
              <p className="text-amber-200 text-sm mt-1">Response within 24 hours</p>
            </div>
            <div>
              <p className="font-semibold mb-1 flex items-center gap-2">
                <span>📞</span> Phone Support
              </p>
              <p className="text-amber-100">+91-XXXX-XXXXXX</p>
              <p className="text-amber-200 text-sm mt-1">Mon-Sat: 9 AM - 6 PM IST</p>
            </div>
            <div>
              <p className="font-semibold mb-1 flex items-center gap-2">
                <span>💬</span> Live Chat
              </p>
              <p className="text-amber-100">Available on website</p>
              <p className="text-amber-200 text-sm mt-1">Instant support during business hours</p>
            </div>
            <div>
              <p className="font-semibold mb-1 flex items-center gap-2">
                <span>📱</span> WhatsApp
              </p>
              <p className="text-amber-100">+91-XXXX-XXXXXX</p>
              <p className="text-amber-200 text-sm mt-1">Quick queries & order updates</p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-amber-500">
            <p className="font-semibold mb-2">Account Management</p>
            <p className="text-amber-100 text-sm">
              Manage your subscription online 24/7 at: <span className="font-semibold">maakhana.com/account</span>
            </p>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800">Can I pause instead of cancel?</p>
                <p className="text-gray-600 text-sm">Yes! You can pause for up to 3 months with no fees.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800">How long does refund processing take?</p>
                <p className="text-gray-600 text-sm">Approved refunds are processed within 5-7 business days to your original payment method.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800">Can I get a refund after delivery?</p>
                <p className="text-gray-600 text-sm">Only for quality issues reported within 48 hours with evidence. Otherwise, no refunds after delivery.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-800">What if I miss the 10-day window?</p>
                <p className="text-gray-600 text-sm">You can still cancel to prevent future renewals, but no refund for the current month.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Last Updated */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Last Updated: February 2026</p>
          <p className="mt-2">© 2026 Maakhana. All rights reserved.</p>
        </div>
      </div>
       <Footer />
    </div>
    
  );
};

export default RefundPolicy;