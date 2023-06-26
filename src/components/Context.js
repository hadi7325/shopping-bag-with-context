import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "گوشی آیفون 11",
            "images": [
                  "http://localhost:3000/shopping-bag-with-context/images/1.jpg",
                "http://localhost:3000/shopping-bag-with-context/images/2.jpg",
                "http://localhost:3000/shopping-bag-with-context/images/3.jpg",
            ],
            "description": "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
            "colors": ["red", "blue", "teal"],
            "price": 180000,
            "count": 1
        },
        {
            "_id": "2",
            "title": "گوشی آیفون 7",
            "images": [
                "http://localhost:3000/shopping-bag-with-context/images/4.jpg",
                "http://localhost:3000/shopping-bag-with-context/images/5.jpg",

            ],
            "description": "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
            "colors": ["red", "blue", "teal"],
            "price": 150000,
            "count": 1
        },
        {
            "_id": "3",
            "title": "گوشی آیفون 12",
            "images": [
                "http://localhost:3000/shopping-bag-with-context/images/6.jpg",
                "http://localhost:3000/shopping-bag-with-context/images/7.jpg",
                "http://localhost:3000/shopping-bag-with-context/images/8.jpg",
            ],
            "description": "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
            "colors": ["red", "blue", "teal"],
            "price": 345000,
            "count": 1
        },
        {
            "_id": "4",
            "title": "گوشی سامسونگ s21",
            "images": [
                "http://localhost:3000/shopping-bag-with-context/images/9.jpg",
                "http://localhost:3000/shopping-bag-with-context/images/10.jpg",
                "http://localhost:3000/shopping-bag-with-context/images/11.jpg",
            ],
            "description": "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
            "content": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
            "colors": ["red", "blue", "teal"],
            "price": 80000,
            "count": 1
        },
    ])

    // const [cart, setCart] = useState([])

    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('dataCart')) || []
      });

    useEffect(() => {
        localStorage.setItem("dataCart", JSON.stringify(cart));
      }, [cart]);
    
   

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })

        if (check) {
            const data = products.filter((product) => {
                return product._id === id
            })

            setCart([...cart, ...data])
        } else {
            alert("این محصول در یبد خرید موجو است .")
        }
    }

    const increase = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1
            }
        })

        setCart([...cart])
    }
    const decrease = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const removeItem = (id) => {
        if (window.confirm("آیا میخواهید این محصول را از سبد خرید حذف کنید ؟")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
        increase: increase,
        decrease: decrease,
        removeItem: removeItem,
    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}