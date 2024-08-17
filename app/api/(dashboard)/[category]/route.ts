import connect from "@/lib/db";
import User from "@/lib/models/users.models";
import Category from "@/lib/models/category.model";
import mongoose, { Types } from "mongoose";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, context: { params: any }) => {
  const categoryID = context.params.category;
  try {
    const body = await request.json();
    const { title } = body;

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        { status: 400 }
      );
    }

    if (!categoryID || !Types.ObjectId.isValid(categoryID)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing categoryID" }),
        { status: 400 }
      );
    }

    await connect();

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found in the database" }),
        {
          status: 404,
        }
      );
    }

    const category = await Category.findOne({
      _id: new Types.ObjectId(categoryID),
      user: userId,
    });

    if (!category) {
      return new NextResponse(
        JSON.stringify({ message: "Category not found in the database" }),
        {
          status: 404,
        }
      );
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryID,
      { title },
      { new: true }
    );

    return new NextResponse(
      JSON.stringify({
        message: "Category is Updated",
        category: updatedCategory,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in updating category" + error.message, {
      status: 500,
    });
  }
};
