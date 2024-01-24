//ye file 1 trha sy best practice hai k hum jitne bhi component banye usy
//yhn import kr k yhn sy export kren is sy ye hoga
//ap sb files ko yhan sy import kro or uska address bhi 1 hi hoga
// or apko bar bar un k folder me nhi jana paryega
//ab ap ko direct component k folder sy uthogy like this
// import { Header, Footer } from '@/components' //<---ye humne child/blog page me use kiya hai  

import Footer from "./Footer";
import Header from "./Header";

export {
    Footer,
    Header
}