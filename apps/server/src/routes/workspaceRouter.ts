import { Router } from "express";
import {
    createWorkspaceGet,
    createWorkspacePost,
    getWorkspace,
    getWorkspace,
    addMembersPost,
    deleteWorkspacePost,
} from "../controllers";

import{requireAuth, authorizeManager, authorizeMember} from "../middleware" 
import{requireAuth, authorizeManager, authorizeMember} from "../middleware" 

const router: Router = Router();

router.route("/createWorkspace")
    .get(requireAuth, createWorkspaceGet)
    .post(requireAuth, createWorkspacePost);

router.route("/getWorkspace/:wsid")
    .get(requireAuth, authorizeMember, getWorkspace);

router.route("/addMembers/:wsid")
    .post(requireAuth, authorizeManager, addMembersPost); 

router.route("/deleteWorkspace")
    .post(requireAuth, authorizeManager, deleteWorkspacePost);
router.route("/deleteWorkspace")
    .post(requireAuth, authorizeManager, deleteWorkspacePost);

export { router as workspaceRouter };
