/// error handling is remaining
// neeed more optyimization regarding security and performance


import jwt from 'jsonwebtoken'
import express from 'express'
import { authMiddleware } from '../middleware';
import { contentModel, linkModel, UserModel } from '../model/schema';
import 'dotenv/config'
import bcrypt from "bcrypt";
import { validateBody, validateContent } from '../validation';
import mongoose from 'mongoose';
import { random } from '../utils';
import { main } from '../vectorModel';


const secret = process.env.secret ?? "";
console.log(secret);


export const route = express.Router();




route.get("/contents", authMiddleware, async (req, res) => {


  //@ts-ignore
  const userId = req.userId;

  try {
    const getContents = await contentModel.find({ userId: userId })
    res.json(getContents);
  } catch (err) {
    console.log(err);
    res.json(err);

  }

})

route.post("/addContent", authMiddleware, async (req, res) => {

  const { success, error } = validateContent.safeParse(req.body);


  if (!success) {
    res.send(error)
    return;
  }
  //@ts-ignore
  const userId = req.userId;


  const { Link, title, type, description } = req.body;

  console.log(Link, title, type, description)




  try {
    const addContent = await contentModel.create({
      userId: userId,
      title,
      type,
      Link,
      description,
    })

    res.send("content added");
  } catch (err) {
    console.log(err);
    res.json(err);
  }

})

route.post("/edit/", async (req, res) => {

  const { success, error } = validateContent.safeParse(req.body);


  if (!success) {
    res.send(error)
    return;
  }
  //@ts-ignore
  const userId = req.userId;


  const { title, description, Id } = req.body;

  console.log(title, description, Id)




  try {
    const getAndUpdateContent = await contentModel.findByIdAndUpdate(Id, {
      title: title,
      description: description
    })



    res.send("content updated");
  } catch (err) {
    console.log(err);
    res.json(err);
  }

})

route.post("/login", async (req, res) => {


  const { success, error } = validateBody.safeParse(req.body);

  if (!success) {
    res.send("unexpected format")
    return;
  }



  const { name, password } = req.body;

  const response = await UserModel.findOne({ name: name });

  if (!response) {
    res.json({
      "message": "user not found"
    })
    return;
  }


  const passwordMatch = await bcrypt.compare(password, response.password ?? "")

  if (passwordMatch) {


    try {
      const id = response._id.toString();


      const JWT = jwt.sign(id, secret)
      res.json({
        "token": JWT
      })
    } catch (err) {
      console.error(err);
    }

  } else {
    res.sendStatus(404).json({
      "message": "you are not signed up, please signup first",
    })
  }


})

route.post("/signup", async (req, res) => {


  const { success, error } = validateBody.safeParse(req.body);

  if (!success) {
    res.send(error)
    return;
  }


  const { name, password, mail } = req.body;
  console.log(password, name, mail)

  const userExist = await UserModel.findOne({ mail: mail });



  if (!userExist) {

    //////////////////// passwordhashing

    const hash = await bcrypt.hash(password, 5);

    const userEntry = await UserModel.create({
      name,
      password: hash,
      mail
    })


    const id = userEntry._id.toString();
    console.log("-------->", userEntry._id.toString(), "---->", secret)


    const JWT = jwt.sign(id, secret)
    res.json({
      "token": JWT
    })
  } else {
    res.json({
      "message": "you did something wrong"
    })
  }
})

route.delete("/deleteContent", authMiddleware, async (req, res) => {

  const { id } = req.body

  console.log("deleteid ------------------->" + id)
  //@ts-ignore
  const userId = req.userId;
  try {
    const content = await contentModel.findByIdAndDelete(id)

    res.send(content)
  } catch (err) {
    console.log(err)
    res.send(err)
  }

})

route.post("/share", authMiddleware, async (req, res) => {
  const { share } = req.body;
  //@ts-ignore
  const userId = req.userId;



  if (share) {


    const User_Link_Exist = await linkModel.findOne({
      userId: userId,
    })

    if (User_Link_Exist) {
      console.log("----------------------")
      res.send(
         User_Link_Exist.hash
      )

      return;
    }

    const getHash = random(10);

    await linkModel.create({
      userId: userId,
      hash: getHash,
    })



    res.send(getHash)
  } else {
    await linkModel.deleteOne({
      userId: userId
    })

    res.json("you have disabled shareing your brain")
  }




})



/**
 * 
 * make it more cleaner, instead of adding each routes for contents, optimize it in one from your skills
 */
route.get("/content/video", authMiddleware, async (req, res) => {

 //@ts-ignore
 const userId = req.userId;


  try {
    const videos = await contentModel.find({ type: "video" , userId: userId})
  //  console.log(videos)
    res.json(videos);
  } catch (err) {
    console.log(err);
    res.json(err);

  }

})

route.get("/content/document", authMiddleware, async (req, res) => {

 //@ts-ignore
 const userId = req.userId;


  try {
    const videos = await contentModel.find({ type: "document" , userId: userId})
   // console.log(videos)
    res.json(videos);
  } catch (err) {
    console.log(err);
    res.json(err);

  }

})



route.get("/content/tweet", authMiddleware, async (req, res) => {

 //@ts-ignore
 const userId = req.userId;


  try {
    const videos = await contentModel.find({ type: "tweet", userId: userId })
   // console.log(videos)
    res.json(videos);
  } catch (err) {
    console.log(err);
    res.json(err);

  }

})

route.get("/content/link", authMiddleware, async (req, res) => {
 //@ts-ignore
 const userId = req.userId;



  try {
    const videos = await contentModel.find({ type: "link", userId: userId })
  //  console.log(videos)
    res.json(videos);
  } catch (err) {
    console.log(err);
    res.json(err);

  }

})

route.get("/:shareLink", async (req, res) => {
  const { shareLink } = req.params;

  const matchLink = await linkModel.findOne({
    hash: shareLink,
  })

  if (matchLink) {
    //console.log( matchLink.userId)
    const contents = await contentModel.find({ userId: matchLink.userId });
    //  console.log(contents)
    res.send(contents);
  } else {
    res.send("brain is not shareable");
  }


})

route.post("/search", authMiddleware, async (req, res) => {

  const { generateOutput, content } = await main();

  res.json({
    Message: generateOutput,
    content: content
  })
})
