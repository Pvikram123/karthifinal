const logout = (req, res) => {
  res
  .clearCookie("access_token")
  .status(200)
  .sendFile(`/home/vikram/Desktop/folder/git/karthi/HTML/homepage.html`) ;

};
module.exports=logout
