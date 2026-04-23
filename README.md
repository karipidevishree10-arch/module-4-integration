The Secure Fortress
You have completed the security module for "Blogify". It is time to submit your integrated code for review. You must demonstrate that your API can identify users (Authentication) and restrict their actions (Authorization).

Required Submission:

GitHub Pull Request (PR): Submit the link to a PR that merges your security-implementation branch into your main branch. This PR should include all changes related to:
Secure Login (JWTs in HttpOnly Cookies).
Authentication Middleware (protect function).
Authorization Logic (Ownership checks in controllers).
Demo the Security: Use Postman to demonstrate:
Scenario A (Authentication): Try to delete a post without logging in (Show 401 Error).
Scenario B (Authorization): Log in as User A, then try to delete a post owned by User B (Show 403 Error).
Scenario C (Success): Log in as User A and successfully delete User A's post.

