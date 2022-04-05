import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
      return (
            <div className="question container">
                <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What Is Context Api?</Accordion.Header>
    <Accordion.Body>
    <p>কন্টেক্সট এপিআই হচ্ছে রিয়েক্ট এর এমন একটি ফাংশন
যা দিয়ে props mapping না করেই tree এর
 নিচের দিকেকোন ডাটা চাইল্ড কম্পোনেন্ট পাঠিয়ে দিলে সেই কম্পোনেন্ট খুব সহজে সেই ডাটা এক্সসেস করতে পারে।
</p>
                        <p>আমরা সাধারণ কোনো কম্পোনেন্ট এ ডাটা পাঠাতে হলে props দিয়ে পাঠাতে হয়। যদি কোনো ফেরেন্ড কম্পোনেন্ট এর ডাটা তার একদম নিচে থাকা চাইল্ড কম্পোনেন্ট এ পাঠানো হয় তাহলে প্রতিটা কম্পোনেন্ট এ props দিয়ে রিসিভ করে করে পাঠাতে হয়। কিন্তু Context খুব সহজে পেরেন্ড থেকে চাইল্ড এ ডাটা পাঠানো যাই। আর এই ডাটা রিসিভ করার জন্য useContext হুক ব্যবহার করা হয়।
</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What Is semantic Tag?</Accordion.Header>
    <Accordion.Body>
      <p>সিমেন্টিক টেগ এর মাধ্যমে আমাদের HTML কোড কে খুব সহজে আমরা আরো অর্থপূর্ণ করে তুলে। এই ছাড়া সিমেন্টিক টেগ ব্যবহার করলে SEO এর সাথে অপটিমাইজেশন করা খুব সহজে হয়ে যায়। সিমেন্টিক টেগ গুলো পড়তে সুবিধা হয়।
কয়েকটি সিমেন্টিক টেগ হলোঃ Header, Main, Foote</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What Is Inline Block and Block element?
</Accordion.Header>
    <Accordion.Body>
      <p>

      সাধারণ ইনলাইন এলিমেন্ট বলতে এমন এলিমেন্ট কে বোঝায় যে এলিমেন্ট তার যতটুকু যায়গা প্রয়োজন সে ঠিক ততটুকো জায়গা জুড়ে বসবে।
যেমনঃ span
আর ব্লক এলিমেন্ট হচ্ছে এমন এলিমেন্ট যে পুরোটা যায়গা জুড়ে বসে।
যেমন: h1,P
ইনলাইন ব্লক এলিমেন্ট হচ্ছে, ওই সব এলিমেন্ট যে ইনলাইন থাকবে কিন্তু আচরণ করবে ব্লক এলিমেন্ট এর মত।

</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                        
                  
            </div>
      )
};

export default Blog;