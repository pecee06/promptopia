"use client"

import { useForm } from "react-hook-form"

const Form = () => {
  const {register, handleSubmit, formState} = useForm({
    defaultValues: {
      prompt: "",
      tag: "#idea"
    }
  })
  const {errors} = formState

  return (
    <section className="flex flex-col justify-center items-center gap-3 w-1/3 mx-auto">
      <h1 className="heading gradient_text_2">Create Post</h1>
      <p className="desc">Create and share amazing prompts with the world and let your imagination run wild with any AI powered platform</p>
      <form onSubmit={handleSubmit(()=>{})} className="flex flex-col gap-2 px-10 py-3 border-4 border-solid border-gray-600 rounded-lg">
        <div className="flex flex-col gap-2">
          <label htmlFor="prompt">Your AI prompt</label>
          <textarea className="p-2 custom_border" name="prompt" placeholder="Enter your prompt..." id="prompt" rows="10" {...register("prompt", {
            required: {
              value: true,
              message: "Prompt is required"
            }
          })}></textarea>
          <p className="error">{errors.prompt?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tag">Tag (#product, #webdevelopment, #idea)</label>
          <input type="text" name="tag" id="tag" className="p-2 custom_border" {...register("tag")}/>
        </div>
        <button type="submit" className="btn_mobile">Create</button>
      </form>
    </section>
  )
}

export default Form