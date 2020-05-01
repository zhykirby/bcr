<template>
    <div class="main">
        <div class="add">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="角色1">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card1.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card1.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp; 定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card1.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card1.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色2">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card2.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp; &nbsp; 战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card2.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card2.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card2.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色3">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card3.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card3.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card3.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card3.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色4">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card4.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card4.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card4.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card4.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色5">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card5.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card5.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card5.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card5.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色6">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card6.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card6.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card6.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp; 破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card6.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色7">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card7.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card7.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card7.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card7.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色8">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card8.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card8.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card8.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card8.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色9">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card9.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card9.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card9.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card9.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色10">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card10.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card10.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card10.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp; 破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card10.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色11">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card11.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card11.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp; 定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card11.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp; 破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card11.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色12">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card12.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card12.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card12.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp; 破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card12.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色13">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card13.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card13.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card13.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp; 破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card13.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色14">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card14.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card14.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card14.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card14.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item label="角色15">
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card15.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2">&nbsp;&nbsp;战力 </el-col>
                  <el-col :span="4">
                    <el-input v-model="ruleForm.card15.cardCE" placeholder="填写战力"></el-input>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp;定位 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card15.job" placeholder="参考">
                      <el-option label="主坦" value="主坦"></el-option>
                      <el-option label="副坦" value="副坦"></el-option>
                      <el-option label="物理输出" value="物理输出"></el-option>
                      <el-option label="破甲手" value="破甲手"></el-option>
                      <el-option label="奶辅" value="奶辅"></el-option>
                      <el-option label="功能辅助" value="功能辅助"></el-option>
                      <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="2"> &nbsp;&nbsp; 破甲 </el-col>
                  <el-col :span="4">
                    <el-select v-model="ruleForm.card15.hasAB" placeholder="有无破甲">
                      <el-option label="无破甲" value="无破甲"></el-option>
                      <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                  </el-col>
                </el-form-item>
            </el-form>
            <div class="button">
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
                <el-button @click="$router.go(-1)">取 消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        card1: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card2: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card3: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card4: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card5: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card6: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card7: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card8: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card9: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card10: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card11: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card12: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card13: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card14: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
        card15: {
          cardName: '',
          cardCE: 0,
          job: '',
          hasAB: ''
        },
      },
      rules: {
        name: [
          {required: true, message: '请输入日程名', trigger: 'blur'},
          {min: 1, max: 8, message: '长度在1-8个字符', trigger: 'blur'}
        ],
        desc: [
          {required: false, message: '请输入日程描述', trigger: 'blur'},
          {min: 1, max: 18, message: '长度在1-18个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    submitForm(formName) {
      let allInfo = this.ruleForm
      allInfo = JSON.stringify(allInfo)
      this.$http.post('/add', {
        allInfo: allInfo
      }).then(res => {
        if (res.code === 200) {
          this.$message({message: '添加成功', type: 'success'})
          setTimeout(resolve => {
            this.$router.go(-1)
          }, 500)
        } else {
          this.$message({message: '出错啦……再试一次吧？', type: 'error'})
        }
      })
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.main
    display flex
    justify-content center
.add
    width 800px
    height 1140px
    display flex
    flex-wrap wrap
.button
    width 100%
    display flex
    justify-content center
    align-self flex-start
    margin-top -60px
form
    margin-top 60px

</style>