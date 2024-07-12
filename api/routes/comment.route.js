import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment,getPostComments,likeComment,editComment,deleteComment,getComments } from '../controllers/comment.contoller.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
router.get('/getcomments' , verifyToken, getComments);

export default router;

