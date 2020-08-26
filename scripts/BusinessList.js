import { businessEntry } from "./Business.js"
import { businessCopy } from "./BusinessProvider.js"

export const businessList = () => {
    const contentElement = document.querySelector(".businessClass")
    const businessArr = businessCopy()

    businessArr.forEach(
        (business) => {
            contentElement += businessEntry(business)
        }
    );
}
