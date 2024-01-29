import Prompt from "@/models/prompt.model";
import connect from "@/utils/database";

export const POST = async req => {
    const {userId, prompt, tag} = await req.json()
    try {
        await connect()
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })
        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (err) {
        return new Response("Failed to create new prompt", {status: 500})
    }
}