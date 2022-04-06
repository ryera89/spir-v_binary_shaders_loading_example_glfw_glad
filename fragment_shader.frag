#version 450 core
#extension GL_GOOGLE_include_directive : enable

#include "uniforms.glsl"

out vec4 FragColor;

void main()
{
    FragColor = color;//vec4(1.0f, 0.5f, 0.2f, 1.0f);
}
