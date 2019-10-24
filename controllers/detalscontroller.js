import dbmodel from "../models";
const {detailsmodel} = dbmodel;
console.log(detailsmodel);
export const create = (req,res)=>{
    console.log("creating");
    console.log(req.body);
   let imgpath = req.file.filename;
    console.log(imgpath)
   const {imgname,firstname,lastname,jobrole,gender,skills,exeperience,ctc} = req.body;
    
      detailsmodel.create({imgpath,imgname,firstname,lastname,jobrole,gender,skills,exeperience,ctc}).then(userOBJ => res.status(201)
                                                .send({
                                                     success:true,
                                                     message:"user create successfully",
                                                     userOBJ
                                                }))
                                                .catch(err => res.status(400)
                                                        .send({
                                                            success:false,
                                                         message:"Unable to create use",
                                                         err
                                                        }));

};
export const get = (req,res) => {
    console.log("get");
    detailsmodel.find({}).then(obj => res.status(200)
                                .send({
                                    success:true,
                                    obj
                                }))
                                .catch(err => res.status(400)
                                .send({
                                    success:false,
                                    err
                                }))
}